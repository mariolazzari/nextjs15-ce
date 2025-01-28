import { getProducts } from "@/prisma";
import { Product } from "@/types/Product";
import { ProductDetail } from "./product-detail";

type Props = {
  searchParams: Promise<{ query: string }>;
};

async function ProductsDB({ searchParams }: Props) {
  const { query } = await searchParams;

  const products: Product[] = await getProducts(query);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold text-center">Products DB</h1>
      <ProductDetail products={products} />
    </div>
  );
}

export default ProductsDB;
