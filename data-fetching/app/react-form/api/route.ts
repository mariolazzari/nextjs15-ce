import { addProduct } from "@/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { title, price, description } = await request.json();
  const product = await addProduct(title, +price, description);

  return NextResponse.json(product);
}
