import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

async function BlogPage() {
  await new Promise(res => setTimeout(res, 2000));

  return <h1>BlogPage</h1>;
}

export default BlogPage;
