async function Product() {
  await new Promise(res => setTimeout(res, 2222));

  return <div>Product</div>;
}

export default Product;
