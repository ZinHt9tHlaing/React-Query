import { NextResponse } from "next/server";
import { Post, posts } from "../data";

export async function GET(request: Request) {
  // Get search parameter from the URL
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";

  // Simulate network delay (between 500ms and 2000ms)
  const delay = Math.floor(Math.random() * 1500) + 500;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Randomly throw an error (10% chance)
  if (Math.random() < 0.1) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }

  // If no search term, return empty array
  if (!searchTerm) {
    return NextResponse.json([]);
  }

  // Search across all categories
  const searchTermLower = searchTerm.toLowerCase();
  const allResults: Post[] = [];

  for (const category in posts) {
    const categoryPosts = posts[category];
    const filteredPosts = categoryPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTermLower) ||
        post.body.toLowerCase().includes(searchTermLower)
    );

    allResults.push(...filteredPosts);
  }

  return NextResponse.json(allResults);
}
