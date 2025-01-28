import { getProducts } from "@/prisma";
import { Product } from "@/types/Product";
import { ProductDetail } from "./product-detail";

async function ProductsDB() {
  const products: Product[] = await getProducts();

  return (
    <>
      <h1>Products DB</h1>
      <ProductDetail products={products} />
    </>
  );
}

export default ProductsDB;
