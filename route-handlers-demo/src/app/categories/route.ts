// force caching
export const dynamic = "force-static";

export async function GET() {
  const categories = [
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
    { id: 3, name: "Three" },
    { id: 4, name: "Four" },
  ];

  return Response.json(categories);
}
