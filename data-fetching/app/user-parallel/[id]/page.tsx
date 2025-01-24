import { Album } from "@/types/Album";
import { Post } from "@/types/Post";

async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  return res.json() as Promise<Post[]>;
}

async function getUserAlbums(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
  );

  return res.json() as Promise<Album[]>;
}

async function UserProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const [posts, albums] = await Promise.all([
    getUserPosts(id),
    getUserAlbums(id),
  ]);

  return (
    <div className="grid grid-cols-2">
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
