import React from "react";
import { ManagementLayout } from "components/layouts";
import { AvatarCarousel } from "components/common";

const data = [
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

const KoordinatorAngkatan = () => {
  return (
    <ManagementLayout
      title="Koordinator Angkatan"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis "
    >
      <AvatarCarousel data={data} />
    </ManagementLayout>
  );
};

export default KoordinatorAngkatan;
