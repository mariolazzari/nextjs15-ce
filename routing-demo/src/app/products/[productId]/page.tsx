type Props = {
  params: Promise<{ productId: string }>;
};

async function ProductDetails({ params }: Props) {
  const { productId } = await params;

  return (
    <>
      <h2>Product Details</h2>
      <h3>Product ID: {productId}</h3>
    </>
  );
}

export default ProductDetails;
