type Props = {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
};

async function ProductReviewPage({ params }: Props) {
  const { productId, reviewId } = await params;

  return (
    <>
      <h2>Product Review</h2>
      <h3>Product ID: {productId}</h3>
      <h3>Review ID: {reviewId}</h3>
    </>
  );
}

export default ProductReviewPage;
