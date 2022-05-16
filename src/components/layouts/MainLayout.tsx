import { useState, Dispatch, SetStateAction } from "react";
import { AppShell } from "@mantine/core";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { Navbar } from "components/navbar";

export interface NavbarProps {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      header={<Header opened={opened} setOpened={setOpened} />}
      navbar={<Navbar opened={opened} setOpened={setOpened} />}
      footer={<Footer />}
      padding={0}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
