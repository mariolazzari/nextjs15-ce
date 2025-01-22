"use client";

import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-tils";
// import { serverSideFunction } from "@/utils/server-utils";

function ClientRoutePage() {
  // error due server-ony import
  //   const res = serverSideFunction();

  const res = clientSideFunction();

  const theme = useTheme();

  return (
    <div style={{ color: theme.colors.primary }}>
      <h1>Client Route</h1>
      <p>{res}</p>
    </div>
  );
}

export default ClientRoutePage;
