import { Metadata } from "next";
import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js Route demo",
  description: "A simple Next.js TypeScript quickstart project.",
};

function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body>
        <header className="p-8 bg-sky-700 text-white">
          <p>Header</p>
        </header>

        <main className="h-[calc(100dvh-175px)] p-4">{children}</main>

        <footer className="p-8 bg-sky-700 text-white">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
