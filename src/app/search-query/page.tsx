"use client";

import PostSearch from "./PostSearch";

export default function SearchQueryPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Debounced Search with React Query
      </h1>

      <div className="mb-8">
        <p className="mb-4">
          This example demonstrates how to use React Query with debounced input
          to search for posts across all categories. The search input is
          debounced to prevent excessive API calls while typing.
        </p>

        <p className="mb-4">
          React Query automatically manages the loading and error states, and
          caches the results for each search term to avoid unnecessary requests.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">Search Posts:</h2>
        <PostSearch />
      </div>
    </div>
  );
}
