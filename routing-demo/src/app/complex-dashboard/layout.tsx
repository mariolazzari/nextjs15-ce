import { Metadata } from "next";
import { PropsWithChildren, ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Parallel routes",
};

type ComplexDashboardLayoutProps = Readonly<
  PropsWithChildren<{
    notifications: ReactNode;
    revenue: ReactNode;
    user: ReactNode;
    login: ReactNode;
  }>
>;

function ComplexDashboardLayout({
  children,
  notifications,
  revenue,
  user,
  login,
}: ComplexDashboardLayoutProps) {
  const isLogged = true;

  if (!isLogged) {
    return <div>{login}</div>;
  }

  return (
    <>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{user}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </>
  );
}

export default ComplexDashboardLayout;
