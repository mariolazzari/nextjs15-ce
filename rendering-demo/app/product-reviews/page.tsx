import Product from "@/components/product";
import Reviews from "@/components/reviews";
import { Suspense } from "react";

function ProductReviewsPage() {
  return (
    <>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>Loading product...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </>
  );
}

export default ProductReviewsPage;
