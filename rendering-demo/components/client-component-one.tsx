"use client";

import { PropsWithChildren, useState } from "react";
// import { ServerComponentOne } from "./server-component-one";

export function ClientComponentOne({ children }: PropsWithChildren) {
  const [name, setName] = useState("One");

  return (
    <>
      <h1>Client Component One</h1>

      {/* <ServerComponentOne/> */}
      {children}
    </>
  );
}
