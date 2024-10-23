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
    <ThemeProvider>
      <html lang="en">
        <body className={theme}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
