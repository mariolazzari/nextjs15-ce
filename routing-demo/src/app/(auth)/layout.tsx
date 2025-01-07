"use client";

import { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AuthLayout({ children }: Readonly<PropsWithChildren>) {
  const pathname = usePathname();

  const links = [
    { href: "/register", label: "Register" },
    { href: "/login", label: "Login" },
    { href: "/forgot", label: "Forgot Password" },
  ];

  return (
    <html lang="en">
      <body>
        <header className="p-8 bg-sky-700 text-white">
          <p>Header</p>
        </header>

        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? "font-bold mx-4" : ""}
          >
            {label}
          </Link>
        ))}

        <main className="h-[calc(100dvh-175px)] p-4">{children}</main>

        <footer className="p-8 bg-sky-700 text-white">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}

export default AuthLayout;
