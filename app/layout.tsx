import { ThemeProvider } from "../app/providers/ThemeProvider";
import Header from "../components/header/Header";
import "./globals.css";

export const metadata = {
  title: "Photography Portfolio",
  description: "A showcase of photography work",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
