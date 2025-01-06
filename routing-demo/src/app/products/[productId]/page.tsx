import { Metadata } from "next";

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

// dynamic metadata
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { productId } = await params;

  const title = await new Promise<string>(resolve => {
    setTimeout(() => {
      resolve(`iPhone ID: ${productId}`);
    }, 1000);
  });

  return {
    title,
    description: `Product ID: ${productId}`,
  };
};

async function ProductDetails({ params }: Props) {
  const { productId } = await params;

  return (
    <>
      <h2>Product ID: {productId}</h2>
    </>
  );
}

export default ProductDetails;
