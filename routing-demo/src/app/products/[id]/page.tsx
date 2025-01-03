type Props = {
  params: Promise<{ id: string }>;
};

async function ProductDetails({ params }: Props) {
  const { id } = await params;

  return <h1>Product Details: {id}</h1>;
}

export default ProductDetails;
