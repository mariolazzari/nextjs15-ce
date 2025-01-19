"use client";

import { useState } from "react";

function DashboardPage() {
  const [name, setName] = useState("");

  console.log("Client component");

  return (
    <>
      <h2>Dashboard</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>Hello {name}</p>
    </>
  );
}

export default DashboardPage;
