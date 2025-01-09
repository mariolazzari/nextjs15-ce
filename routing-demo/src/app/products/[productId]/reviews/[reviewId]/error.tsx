"use client";

type Props = {
  error: Error;
};

function ReviewErrorPage({ error }: Props) {
  return (
    <>
      <h2>Error in review page</h2>
      <p>{error.message}</p>
    </>
  );
}

export default ReviewErrorPage;
