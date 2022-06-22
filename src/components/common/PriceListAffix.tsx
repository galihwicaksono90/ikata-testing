import { useState } from "react";
import { Affix, UnstyledButton } from "@mantine/core";
import { PriceList } from "components/common";
import { IconChevronsLeft } from "@tabler/icons";

export const PriceListAffix = () => {
  const [opened, setOpened] = useState(false);
  return (
    <Affix
      position={{ top: "15%", right: 0 }}
      className={opened ? "opened" : ""}
      sx={(theme) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 200ms ease",
        transform: "translateX(360px)",
        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
          transform: "translateX(280px)",
        },
        "& svg": {
          transition: "transform ease 200ms",
        },
        "&.opened": {
          transform: "translateX(0px)",
          "& svg": {
            transform: "rotate(180deg)",
          },
        },
        zIndex: 9999,
      })}
    >
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        sx={(theme) => ({
          background: "rgba(0,0,0,0.6)",
          borderRadius: "12px 0px 0px 12px",
          color: theme.colors.orange[0],
          height: 51,
          width: 39,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <IconChevronsLeft />
      </UnstyledButton>
      <PriceList
        sx={(theme) => ({
          width: 360,
          padding: 20,
          background: "rgba(0,0,0,0.6)",
          boxShadow: theme.shadows.md,
          color: theme.white,
          borderRadius: "12px 0px 0px 12px",
          mixBlendMode: "darken",

          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            width: 280,
          },
        })}
      />
    </Affix>
  );
};
