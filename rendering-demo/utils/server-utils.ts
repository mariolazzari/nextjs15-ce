import "server-only";

export const serverSideFunction = () => {
  console.log("first server side function");

  return "server result";
};
