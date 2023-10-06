"use client";

import { ThemeProvider } from "next-themes";

export default function ThemeProviders({ children, ...props }) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
