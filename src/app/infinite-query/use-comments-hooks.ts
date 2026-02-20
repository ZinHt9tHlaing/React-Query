import { fetchData } from "@/lib/fetch-utils";
import { useInfiniteQuery } from "@tanstack/react-query";
import { CommentsResponse } from "../api/comments/route";

const UseCommentsQuery = () => {
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

export default UseCommentsQuery;
