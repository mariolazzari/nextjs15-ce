type Props = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

async function ProductPage({ params }: Props) {
  const { id } = await params;

  return (
    <>
      <h1>Product {id}</h1>
      <p>rendered at {new Date().toLocaleTimeString()}</p>
    </>
  );
}

export default ProductPage;
