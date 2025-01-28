"use client";

import { removeProduct } from "@/actions/products";
import Search from "@/components/search";
import { Product } from "@/types/Product";
import Link from "next/link";
import { useOptimistic } from "react";
import Form from "next/form";

type Props = {
  products: Product[];
};

export function ProductDetail({ products }: Props) {
  const [optProds, setOptProds] = useOptimistic(products, (prods, id) =>
    prods.filter(p => p.id !== id)
  );

  const deleteProd = async (id: number) => {
    setOptProds(id);
    await removeProduct(id);
  };

  return (
    <>
      <Search />

      <div>
        {optProds.map(product => (
          <div key={product.id}>
            <h2>
              <Link href={`/products-db/${product.id}`}>{product.title}</Link>
            </h2>
            <p>{product.description}</p>
            <p>{product.price}</p>

            <Form action={deleteProd.bind(null, product.id)}>
              <button type="submit">Delete</button>
            </Form>
          </div>
        ))}
      </div>
    </>
  );
}
