import Layout from "components/Layout";
import { Title, Box, Container, Text } from "@mantine/core";
import AvatarCarousel from "components/AvatarCarousel";
import { ManagementLayout } from "components/layouts";

interface Props {
  name: string;
  title: string;
}

const data: Props[] = [
  {
    name: "Rizki Amrullah",
    title: "Ketua",
  },
  {
    name: "Budi Gunawan",
    title: "Wakil Ketua",
  },
  {
    name: "Sri Lestari",
    title: "Sekretaris",
  },
  {
    name: "Setyo Kurniawan",
    title: "Bendahara",
  },
  {
    name: "Rizki Amrullah",
    title: "Ketua",
  },
  {
    name: "Budi Gunawan",
    title: "Wakil Ketua",
  },
  {
    name: "Sri Lestari",
    title: "Sekretaris",
  },
  {
    name: "Setyo Kurniawan",
    title: "Bendahara",
  },
  {
    name: "Sri Lestari",
    title: "Sekretaris",
  },
  {
    name: "Setyo Kurniawan",
    title: "Bendahara",
  },
];

export default function DewanPengawas() {
  return (
    <ManagementLayout
      title="Dewan Pengawas"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      <AvatarCarousel data={data} />
    </ManagementLayout>
  );
}
