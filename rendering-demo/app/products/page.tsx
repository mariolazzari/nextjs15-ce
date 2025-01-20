import Link from "next/link";

function ProductsPage() {
  return (
    <>
      <h1>Products</h1>
      {[1, 2, 3].map(n => (
        <Link key={n} href={`/products/${n}`}>
          Product {n}
        </Link>
      ))}
    </>
  );
}

export default ProductsPage;
