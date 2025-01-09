"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

function ReviewErrorPage({ error, reset }: Props) {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <>
      <h2>Error in review page</h2>
      <p>{error.message}</p>
      <button onClick={reload}>Try Again</button>
    </>
  );
}

export default ReviewErrorPage;
