import { cookies } from "next/headers";

async function AboutPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log("Server component theme:", theme);

  return <h1>About Page</h1>;
}

export default AboutPage;
