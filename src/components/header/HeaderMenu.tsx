import { MenuItem, MenuItemChild } from "components/header";

export function HeaderMenu() {
  return (
    <>
      <MenuItem title="Beranda" href="/" />
      <MenuItem title="Tentang Kami" href="/tentang-kami" />
      <MenuItem title="Susunan Pengurus" href="/susunan-pengurus">
        <MenuItemChild href="/susunan-pengurus/dewan-pengawas">
          Dewan Pengurus
        </MenuItemChild>
        <MenuItemChild href="/susunan-pengurus/pengurus-pusat">
          Pengurus Pusat
        </MenuItemChild>
        <MenuItemChild href="/susunan-pengurus/koordinator-wilayah">
          Koordinator Wilayah
        </MenuItemChild>
        <MenuItemChild href="/susunan-pengurus/koordinator-angkatan">
          Koordinator Angkatan
        </MenuItemChild>
      </MenuItem>
      <MenuItem title="Lowongan" href="/lowongan">
        <MenuItemChild href="/lowongan/pekerjaan">
          Lowongan Pekerjaan
        </MenuItemChild>
        <MenuItemChild href="/lowongan/tugas-akhir">
          Lowongan Tugas Akhir
        </MenuItemChild>
        <MenuItemChild href="/lowongan/beasiswa">
          Lowongan Beasiswa
        </MenuItemChild>
      </MenuItem>
      {/* <MenuItem title="News" href="/news">
        <MenuItemChild href="/news/pekerjaan"Berit></MenuItemChild>
        <MenuItemChild href="/news/beasiswa">Lowongan Pekerjaan</MenuItemChild>
      </MenuItem> */}
      <MenuItem title="Berita" href="/berita" />
      <MenuItem title="Artikel" href="/artikel" />
      <MenuItem title="Merchandise" href="/merchandise" />
      <MenuItem title="Koperasi IKATA" href="/koperasi" />
    </>
  );
}
