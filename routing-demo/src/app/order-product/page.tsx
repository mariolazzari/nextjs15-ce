"use client";

import { useRouter } from "next/navigation";

function OrderProductPage() {
  const router = useRouter();

  const onClick = () => {
    router.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button className="p-4 bg-slate-400" onClick={onClick}>
        Place Order
      </button>
    </>
  );
}

export default OrderProductPage;
