"use client";

import "./globals.css";
import { ThemeProvider, useTheme } from "../app/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={theme === "dark" ? "dark" : ""}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
