// Comment type definition
export type Comment = {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  text: string;
  createdAt: string;
};

export const comments: Comment[] = [
  {
    id: 1,
    user: { name: "David Brown", avatar: "DB" },
    text: "Thanks for sharing your insights on this topic.",
    createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  {
    id: 2,
    user: { name: "Mia Jackson", avatar: "MJ" },
    text: "I think there's a small mistake in the third paragraph.",
    createdAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
  },
  {
    id: 3,
    user: { name: "James Wilson", avatar: "JW" },
    text: "This is exactly what I needed to understand the concept.",
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: 4,
    user: { name: "Christopher Turner", avatar: "CT" },
    text: "I've been struggling with this problem for weeks. Thank you!",
    createdAt: new Date(Date.now() - 1000 * 60 * 40).toISOString(),
  },
  {
    id: 5,
    user: { name: "Noah White", avatar: "NW" },
    text: "How does this compare to other solutions?",
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: 6,
    user: { name: "Amelia Baker", avatar: "AB" },
    text: "I've shared this with my team. They found it very insightful.",
    createdAt: new Date(Date.now() - 1000 * 60 * 75).toISOString(),
  },
  {
    id: 7,
    user: { name: "Joseph Campbell", avatar: "JC" },
    text: "This is exactly the solution I've been looking for.",
    createdAt: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
  },
  {
    id: 8,
    user: { name: "Ava Lewis", avatar: "AL" },
    text: "Could this approach be applied to larger scale systems?",
    createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
  },
  {
    id: 9,
    user: { name: "Victoria Nelson", avatar: "VN" },
    text: "This approach seems more straightforward than what I've been doing.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
  },
  {
    id: 10,
    user: { name: "Liam Taylor", avatar: "LT" },
    text: "Looking forward to more content like this.",
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
  },
  {
    id: 11,
    user: { name: "Scarlett Phillips", avatar: "SP" },
    text: "Have you considered writing a follow-up on advanced techniques?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
  },
  {
    id: 12,
    user: { name: "Henry Adams", avatar: "HA" },
    text: "Can you provide any benchmarks for this implementation?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
  },
  {
    id: 13,
    user: { name: "Benjamin King", avatar: "BK" },
    text: "I'm going to implement this in my project right away.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 10).toISOString(),
  },
  {
    id: 14,
    user: { name: "Maria Garcia", avatar: "MG" },
    text: "I have a question about the second point. Could you elaborate?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
  },
  {
    id: 15,
    user: { name: "Isabella Clark", avatar: "IC" },
    text: "I've been using this technique for a while and it works great!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
  },
  {
    id: 16,
    user: { name: "Ethan Harris", avatar: "EH" },
    text: "This clarified a lot of misconceptions I had. Thank you!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: 17,
    user: { name: "Daniel Carter", avatar: "DC" },
    text: "I wonder how this would scale with thousands of records?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
  },
  {
    id: 18,
    user: { name: "Charlotte Scott", avatar: "CS" },
    text: "Have you considered the performance implications of this approach?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
  },
  {
    id: 19,
    user: { name: "Emma Lee", avatar: "EL" },
    text: "Interesting perspective! Have you considered the alternative approach?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
  },
  {
    id: 20,
    user: { name: "Grace Mitchell", avatar: "GM" },
    text: "The diagrams really helped clarify the complex parts.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString(),
  },
  {
    id: 21,
    user: { name: "Sophia Martinez", avatar: "SM" },
    text: "I didn't know about this before. Very informative!",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
  },
  {
    id: 22,
    user: { name: "Alex Johnson", avatar: "AJ" },
    text: "Great article! Really enjoyed reading this.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
  },
  {
    id: 23,
    user: { name: "Olivia Anderson", avatar: "OA" },
    text: "The examples you provided were very helpful.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
  },
  {
    id: 24,
    user: { name: "William Green", avatar: "WG" },
    text: "This would pair well with the concept discussed last week.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(),
  },
  {
    id: 25,
    user: { name: "Lucas Moore", avatar: "LM" },
    text: "Do you have any resources for further reading on this topic?",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 120).toISOString(),
  },
];
