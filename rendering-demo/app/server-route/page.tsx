import { serverSideFunction } from "@/utils/server-utils";

function ServerRoutePage() {
  const res = serverSideFunction();

  return (
    <>
      <h1>Server route</h1>
      <p>{res}</p>
    </>
  );
}

export default ServerRoutePage;
