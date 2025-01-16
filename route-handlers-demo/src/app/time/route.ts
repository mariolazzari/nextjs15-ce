// force caching
export const dynamic = "force-static";
// revalidate data every 10s
export const revalidate = 10;

export async function GET() {
  const time = new Date().toLocaleTimeString();

  return Response.json({ time });
}
