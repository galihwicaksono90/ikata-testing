import { Accordion } from "@mantine/core";
import { MenuItem } from "components/header";
import { useRouter } from "next/router";

export const NavbarMenu = () => {
  const { asPath } = useRouter();
  return (
    <>
      <MenuItem title="Beranda" href="/" withPadding />
      <MenuItem title="Tentang Kami" href="/tentang-kami" withPadding />
      <Accordion
        sx={{
          padding: 0,
          width: "100%",
        }}
        styles={(theme) => ({
          item: {
            border: "0px",
          },
          label: {
            fontSize: theme.fontSizes.md,
            fontWeight: 500,
            paddingLeft: 10,
          },
          control: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        })}
      >
        <Accordion.Item
          label="Susunan Pengurus"
          iconPosition="right"
          sx={(theme) => ({
            "& .mantine-Accordion-label": {
              color: asPath.startsWith("/susunan-pengurus")
                ? theme.primaryColor
                : theme.colors.white,
            },
          })}
        >
          <MenuItem
            title="Dewan Pengawas"
            href="/susunan-pengurus/dewan-pengawas"
            withPadding
          />
          <MenuItem
            title="Pengurus Pusat"
            href="/susunan-pengurus/pengurus-pusat"
            withPadding
          />
          <MenuItem
            title="Koordinator Wilayah"
            href="/susunan-pengurus/koordinator-wilayah"
            withPadding
          />
          <MenuItem
            title="Koordinator Angkatan"
            href="/susunan-pengurus/koordinator-angkatan"
            withPadding
          />
        </Accordion.Item>
        <Accordion.Item
          label="Lowongan"
          iconPosition="right"
          sx={(theme) => ({
            "& .mantine-Accordion-label": {
              color: asPath.startsWith("/lowongan")
                ? theme.primaryColor
                : theme.colors.white,
            },
          })}
        >
          <MenuItem
            title="Lowongan Pekerjaan"
            href="/lowongan/pekerjaan"
            withPadding
          />
          <MenuItem
            title="Lowongan Tugas Akhir"
            href="/lowongan/tugas-akhir"
            withPadding
          />
          <MenuItem
            title="Lowongan Beasiswa"
            href="/lowongan/beasiswa"
            withPadding
          />
        </Accordion.Item>
        <Accordion.Item
          label="Berita"
          iconPosition="right"
          sx={(theme) => ({
            "& .mantine-Accordion-label": {
              color: asPath.startsWith("/berita")
                ? theme.primaryColor
                : theme.colors.white,
            },
          })}
        >
          <MenuItem title="Berita Umum" href="/berita/umum" withPadding />
          <MenuItem title="Bertia IKATA" href="/berita/ikata" withPadding />
        </Accordion.Item>
      </Accordion>
      <MenuItem title="Articles" href="/articles" withPadding />
      <MenuItem title="Merchandise" href="/merchandise" withPadding />
      <MenuItem title="Koperasi IKATA" href="/koperasi" withPadding />
    </>
  );
};
