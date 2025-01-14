import { ReactNode } from "react";
import "./styles.css";

type Props = {
  modal: ReactNode;
  children: ReactNode;
};

function Layout({ modal, children }: Props) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default Layout;
