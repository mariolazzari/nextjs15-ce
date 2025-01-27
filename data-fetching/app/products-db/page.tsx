import { getProducts } from "@/prisma";
import { Product } from "@/types/Product";
import Link from "next/link";

async function ProductsDB() {
  const products: Product[] = await getProducts();

  return (
    <div>
      <h1>
        Products DB
        <div>
          {products.map(product => (
            <div key={product.id}>
              <h2>
                <Link href={`/products-db/${product.id}`}>{product.title}</Link>
              </h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </h1>
    </div>
  );
}

export default ProductsDB;
