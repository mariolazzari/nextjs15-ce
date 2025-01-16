import { redirect } from "next/navigation";

export function GET() {
  redirect("/profile/api/v2");

  return new Response("Profile v1 api");
}
