type Props = {
  params: Promise<{ productId: string }>;
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
