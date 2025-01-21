"use client";

import { useTheme } from "@/components/theme-provider";

// import { serverSideFunction } from "@/utils/server-utils";

function ClientRoutePage() {
  // error due server-ony import
  //   const res = serverSideFunction();

  const theme = useTheme();

  return (
    <div style={{ color: theme.colors.primary }}>
      <h1>Client Route</h1>
      {/* <p>{res}</p> */}
    </div>
  );
}

export default ClientRoutePage;
