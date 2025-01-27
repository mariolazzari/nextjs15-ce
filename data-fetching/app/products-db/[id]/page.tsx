import { FormState } from "@/actions/products";
import EditProductForm from "./product-edit-form";
import { getProduct } from "@/prisma";
import { Product } from "@/types/Product";
import { notFound } from "next/navigation";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // fetch product by id
  const { id } = await params;
  const product: Product | null = await getProduct(+id);
  if (!product) {
    notFound();
  }

  return <EditProductForm product={product} />;
}
