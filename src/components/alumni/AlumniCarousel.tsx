import { Box } from "@mantine/core";
import { Carousel } from "components/common";
import AlumniCard from "./AlumniCard";

export const items = [
  {
    title: "Menara Merah Putih Mining Contractor",
    image: "/alumni1.png",
  },
  {
    title: "Dafam Fortuna Seturan Yogyakarta",
    image: "/alumni2.png",
  },
  {
    title: "Kedai Kopi (Komunitas Tambang Indonesia)",
    image: "/alumni3.png",
  },
];

export default function AlumniCarousel() {
  return (
    <Box sx={{ flexGrow: 1, height: 400 }}>
      <Carousel slidesToShow={3} dots>
        {items.map((item, index) => (
          <AlumniCard key={index} title={item.title} image={item.image} />
        ))}
      </Carousel>
    </Box>
  );
}
