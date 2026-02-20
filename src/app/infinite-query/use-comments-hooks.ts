import { fetchData, postData } from "@/lib/fetch-utils";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { CommentsResponse } from "../api/comments/route";

export const UseCommentsQuery = () => {
  return useInfiniteQuery({
    queryKey: ["comments"],
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
      postData(`/api/comments`, newComment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
};
