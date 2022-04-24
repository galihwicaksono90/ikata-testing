import React from "react";
import { AppShell } from "@mantine/core";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <AppShell header={<Header />} footer={<Footer />}>
      {children}
    </AppShell>
  );
};

export default Layout;
