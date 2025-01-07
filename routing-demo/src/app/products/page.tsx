import Link from "next/link";

function Products() {
  return (
    <div>
      <h1>Products page</h1>

      <Link href="/">
        <h2> Back Home </h2>
      </Link>

      <ul>
        {[1, 2, 3].map(id => (
          <li key={id}>
            <Link href={`/products/${id}`} replace={id === 3}>
              Product ${id}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
