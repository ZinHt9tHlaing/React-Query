import { fetchData, postData } from "@/lib/fetch-utils";
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { CommentsResponse } from "../api/comments/route";
import { Comment } from "../api/comments/data";

const queryKey: QueryKey = ["comments"];

export const UseCommentsQuery = () => {
  return useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam }) =>
      fetchData<CommentsResponse>(
        `/api/comments?cursor=${pageParam ? `&cursor=${pageParam}` : ""}`,
      ),
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};

export const useCreateCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newComment: { text: string }) =>
      postData<{ comment: Comment }>(`/api/comments`, newComment),
    onSuccess: async ({ comment }) => {
      await queryClient.cancelQueries({ queryKey });

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
                comments: [comment, ...firstPage.comments],
              },
              ...oldData.pages.slice(1),
            ],
          };
        }
      });
    },
  });
};
