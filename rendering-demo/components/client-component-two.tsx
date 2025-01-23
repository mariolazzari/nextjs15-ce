"use client";

import { useState } from "react";

export function ClientComponentTwo() {
  const [name, setName] = useState("Two");

  return <h1>Client Component Two</h1>;
}
