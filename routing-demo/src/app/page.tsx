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
        <li>
          <Link href="/articles/news?lang=en">Read in English</Link>
          <Link href="/articles/news?lang=it">Read in Italian</Link>
        </li>
      </ul>
    </>
  );
}

export default HomePage;
