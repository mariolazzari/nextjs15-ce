import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Pdroduct Details",
  description: "A simple Next.js TypeScript quickstart project.",
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

function ProductLayout({ children }: Readonly<PropsWithChildren>) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }

  return (
    <html lang="en">
      <body className="p-4">
        <h2 className="text-2xl font-semibold">Product Details</h2>
        <main className="h-[calc(100dvh-175px)] p-4">{children}</main>
      </body>
    </html>
  );
}

export default ProductLayout;
