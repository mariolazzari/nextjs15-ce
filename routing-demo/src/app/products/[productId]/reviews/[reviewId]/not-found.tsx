"use client";
import { usePathname } from "next/navigation";

function NotFoundPage() {
  const path = usePathname();

  const reviewId = path.split("/")[4];

  return (
    <div>
      <h2>Review {reviewId} Not Found</h2>
      <p>A product can have maximun 100 reviews</p>
    </div>
  );
}

export default NotFoundPage;
