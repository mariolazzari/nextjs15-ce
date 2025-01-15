import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const reqHeaders = new Headers(req.headers);
  let token = reqHeaders.get("Authorization");
  console.log(token);

  const headersList = await headers();
  token = headersList.get("Authorization");
  console.log(token);

  const theme = req.cookies.get("theme");
  console.log(theme);

  const coookieStore = await cookies();
  coookieStore.set("resultsPerPage", "10");

  return new Response("<h1>Profile title</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
