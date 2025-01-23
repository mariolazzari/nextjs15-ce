import { readFileSync } from "fs";

export function ServerComponentTwo() {
  try {
    readFileSync("src/components/server-component-two.tsx", "utf8");
  } catch (ex) {
    console.error(ex);
  }

  return <h1>Server Component Two</h1>;
}
