"use server";

import { addProduct, deleteProduct, updateProduct } from "@/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = Partial<{
  title: string;
  price: string;
  description: string;
}>;

export type FormState = {
  errors: Errors;
};

export async function createProduct(_prevState: FormState, formData: FormData) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};
  if (!title) {
    errors.title = "Title is required";
  }
  if (!price) {
    errors.price = "Price is required";
  }
  if (!description) {
    errors.description = "Description is required";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addProduct(title, +price, description);
  redirect("/products-db");
}

export async function editProduct(
  id: number,
  _prevState: FormState,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};
  if (!title) {
    errors.title = "Title is required";
  }
  if (!price) {
    errors.price = "Price is required";
  }
  if (!description) {
    errors.description = "Description is required";
  }
  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await updateProduct(id, title, +price, description);
  redirect("/products-db");
}

export async function removeProduct(id: number) {
  await deleteProduct(id);
  revalidatePath("/products-db");
}
