import { getProducts } from "@/prisma";
import { Product } from "@/types/Product";

async function ProductsDB() {
  const products: Product[] = await getProducts();

  return (
    <div>
      <h1>
        Products DB
        <div>
          {products.map(product => (
            <div key={product.id}>
              <h2>{product.title}</h2>
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
