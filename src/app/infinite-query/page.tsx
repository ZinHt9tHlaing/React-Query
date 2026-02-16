"use client";

import InfiniteComments from "./InfiniteComments";

export default function InfiniteQueryPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-4">
          Infinite Queries with React Query
        </h1>
        <p className="mb-4">
          This example demonstrates how to implement infinite loading with React
          Query&apos;s
          <code className="bg-gray-100 px-1 rounded">
            useInfiniteQuery
          </code>{" "}
          hook. Additionally, it showcases mutations, updating the query cache
          after a mutation, and optimistic updates. <br /> Try posting a new
          comment or click the &apos;Load More&apos; button
        </p>
      </div>

      <div className="mb-6">
        <div className="border rounded-lg p-4 bg-gray-50">
          <InfiniteComments />
        </div>
      </div>

      <div className="mt-8 space-y-4 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold">Key Benefits of useInfiniteQuery</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Seamless pagination with cursor-based loading</li>
          <li>Built-in state management for loading more data</li>
          <li>
            Automatic handling of page data with{" "}
            <code className="bg-gray-200 px-1 rounded">data.pages</code>
          </li>
          <li>
            Convenient flags like{" "}
            <code className="bg-gray-200 px-1 rounded">hasNextPage</code> and{" "}
            <code className="bg-gray-200 px-1 rounded">isFetchingNextPage</code>
          </li>
          <li>Preserves previous data while loading new pages</li>
          <li>Handles errors gracefully at any stage of the pagination</li>
        </ul>
      </div>

      <div className="mt-8 space-y-4 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold">Benefits of Optimistic Updates</h2>
        <p className="mb-3">
          Optimistic updates provide a better user experience by immediately
          updating the UI before the server confirms the change. The server in
          this demo has a 10% chance of randomly returning an error to
          demonstrate the rollback behavior.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Instant UI feedback makes the application feel more responsive
          </li>
          <li>Automatic rollbacks if the server request fails</li>
          <li>Enhanced user experience without sacrificing data integrity</li>
        </ul>
      </div>
    </div>
  );
}
