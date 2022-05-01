import React from "react";
import { AppShell } from "@mantine/core";
import Header from "components/Header";
import Footer from "components/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <AppShell header={<Header />} footer={<Footer />} padding={0}>
      {children}
    </AppShell>
  );
};

export default Layout;
