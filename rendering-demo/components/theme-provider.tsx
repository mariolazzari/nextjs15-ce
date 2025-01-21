"use client";

import { Theme } from "@/types/Theme";
import { createContext, PropsWithChildren, use, useContext } from "react";

const defaultTheme: Theme = {
  colors: {
    primary: "#0070f3",
    secondary: "#ff0080",
  },
};

const ThemeContext = createContext(defaultTheme);

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  return <ThemeContext value={defaultTheme}>{children}</ThemeContext>;
};

// export const useTheme = () => useContext(ThemeContext);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return theme;
};
