import { NextResponse } from "next/server";
import { comments, type Comment } from "./data";

export type CommentsResponse = {
  comments: Comment[];
  nextCursor: number | null;
  totalComments: number;
};

// This simulates a call to your DB/ORM
function getComments(
  take: number,
  cursor?: number
): {
  data: Comment[];
  nextCursor: number | null;
} {
  // Find the starting index based on cursor
  let startIndex = 0;

  if (cursor) {
    // Find the index of the comment with the given ID (cursor)
    const cursorIndex = comments.findIndex((comment) => comment.id === cursor);
    if (cursorIndex !== -1) {
      startIndex = cursorIndex; // Start at this comment
    }
  }

  // Get the slice of comments for this page (fetch take + 1 to check if more exist)
  const fetchedItems = comments.slice(startIndex, startIndex + take + 1);

  // The additional item becomes the next cursor
  const nextCursor = fetchedItems.length > take ? fetchedItems[take].id : null;

  return {
    data: fetchedItems.slice(0, take),
    nextCursor,
  };
}

export async function GET(request: Request) {
  // Parse URL parameters
  const url = new URL(request.url);
  const cursorParam = url.searchParams.get("cursor");
  const cursor = cursorParam ? parseInt(cursorParam, 10) : undefined;

  // You could also send this as a query parameter
  const pageSize = 5;

  // Simulate network delay (between 300ms and 1000ms)
  const delay = Math.floor(Math.random() * 700) + 300;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Randomly throw an error (10% chance)
  if (Math.random() < 0.1) {
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 }
    );
  }

  // Get paginated comments
  const { data, nextCursor } = getComments(pageSize, cursor);

  const response: CommentsResponse = {
    comments: data,
    nextCursor,
    totalComments: comments.length,
  };

  return NextResponse.json(response);
}

export async function POST(request: Request) {
  // Parse the request body
  const { text } = await request.json();

  // Validate required fields
  if (!text) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  // Simulate network delay (between 300ms and 1000ms)
  const delay = Math.floor(Math.random() * 700) + 300;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Randomly throw an error (10% chance)
  if (Math.random() < 0.1) {
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 }
    );
  }

  // In a real app, this would come from your authentication service
  const currentUser = {
    name: "Current User",
    avatar: "CU",
  };

  // Create a new comment
  const newComment: Comment = {
    id: Date.now(),
    user: currentUser,
    text,
    createdAt: new Date().toISOString(),
  };

  // Add the comment to the beginning of the array (newest first). In a real app, you'd add it to your database.
  comments.unshift(newComment);

  return NextResponse.json({
    comment: newComment,
  });
}
