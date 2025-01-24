import { Post } from "@/types/Post";
import Author from "./author";
import { Suspense } from "react";

async function PostsSequentialPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const filteredPosts = posts.filter(post => post.id % 10 === 1);

  return (
    <div className="container">
      <h1>Blog posts</h1>
      <div>
        {filteredPosts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>

            <Suspense fallback={<h3>Loading author...</h3>}>
              <Author id={post.userId} />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsSequentialPage;
