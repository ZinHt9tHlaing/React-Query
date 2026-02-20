import { postData } from "@/lib/fetch-utils";
import {
  InfiniteData,
  QueryKey,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { CommentsResponse } from "../api/comments/route";
import { Comment } from "../api/comments/data";

const queryKey: QueryKey = ["comments"];

function useCreateCommentsMutationOptimistic() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newComment: { text: string }) =>
      postData<{ comment: Comment }>(`/api/comments`, newComment),

    onMutate: async (newCommentData) => {
      await queryClient.cancelQueries({ queryKey });

      const previousData =
        queryClient.getQueryData<
          InfiniteData<CommentsResponse, number | undefined>
        >(queryKey);

      // fake comment
      const optimisticComment: Comment = {
        id: Date.now(),
        text: newCommentData.text,
        user: {
          name: "Current User",
          avatar: "Cu",
        },
        createdAt: new Date().toISOString(),
      };

      queryClient.setQueryData<
        InfiniteData<CommentsResponse, number | undefined>
      >(queryKey, (oldData) => {
        const firstPage = oldData?.pages[0];

        if (firstPage) {
          return {
            ...oldData,
            pages: [
              {
                ...firstPage,
                totalComments: firstPage.totalComments + 1,
                comments: [optimisticComment, ...firstPage.comments],
              },
              ...oldData.pages.slice(1),
            ],
          };
        }
      });

      return { previousData };
    },

    onError(error, variables, context) {
      queryClient.setQueryData(queryKey, context?.previousData);
    },
  });
}

export default useCreateCommentsMutationOptimistic;
