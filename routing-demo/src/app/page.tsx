import Link from "next/link";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
