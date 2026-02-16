import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function CommentForm() {
  const [commentText, setCommentText] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!commentText.trim()) return;

    setCommentText("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <Input
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment..."
        className="flex-1"
      />
      <Button type="submit" disabled={!commentText.trim()}>
        Post
      </Button>
    </form>
  );
}
