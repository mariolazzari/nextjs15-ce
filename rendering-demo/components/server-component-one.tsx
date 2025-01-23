import { readFileSync } from "fs";
import { ServerComponentTwo } from "./server-component-two";
import { ClientComponentOne } from "./client-component-one";

export function ServerComponentOne() {
  try {
    readFileSync("src/components/server-component-one.tsx", "utf8");
  } catch (e) {
    console.error(e);
  }

  return (
    <>
      <h1>Server Component One</h1>
      <ServerComponentTwo />
      <ClientComponentOne />
    </>
  );
}
