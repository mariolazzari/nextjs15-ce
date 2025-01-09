import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

async function ProductReviewPage({ params }: Props) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }

  const { productId, reviewId } = await params;

  if (+reviewId > 100) {
    notFound();
    // redirect("/product");
  }

  return (
    <>
      <h2>Product Review</h2>
      <h3>Product ID: {productId}</h3>
      <h3>Review ID: {reviewId}</h3>
    </>
  );
}

export default ProductReviewPage;
