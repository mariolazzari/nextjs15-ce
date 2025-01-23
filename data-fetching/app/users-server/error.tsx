"use client";

function UsersError({ error }: { error: Error }) {
  return (
    <>
      <h1>Error loading users</h1>
      <p className="text-red-800">{error.message}</p>
    </>
  );
}

export default UsersError;
