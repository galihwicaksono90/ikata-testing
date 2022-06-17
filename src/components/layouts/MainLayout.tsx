import { useState, Dispatch, SetStateAction } from "react";
import { AppShell, Box } from "@mantine/core";
import { Header } from "components/header";
import { Footer } from "components/footer";
import { Navbar } from "components/navbar";

export interface MainLayoutProps {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      header={<Header opened={opened} setOpened={setOpened} />}
      navbar={<Navbar opened={opened} setOpened={setOpened} />}
      footer={<Footer />}
      padding={0}
      styles={{
        main: {
          maxWidth: "100%",
        },
      }}
    >
      {children}
    </AppShell>
  );
};
