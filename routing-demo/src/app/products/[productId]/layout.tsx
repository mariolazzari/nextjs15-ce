import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Pdroduct Details",
  description: "A simple Next.js TypeScript quickstart project.",
};

function ProductLayout({ children }: Readonly<PropsWithChildren>) {
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
