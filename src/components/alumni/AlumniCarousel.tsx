import { Box } from "@mantine/core";
import { Carousel, CarouselBreakpoint } from "components/common";
import { AlumniCard } from "components/alumni";

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

const breakpoints: CarouselBreakpoint[] = [
  {
    breakpoint: 860,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 580,
    settings: {
      slidesToShow: 1,
    },
  },
];

export function AlumniCarousel() {
  return (
    <Box sx={{ flexGrow: 1, height: 400 }}>
      <Carousel slidesToShow={3} dots responsive={breakpoints} infinite={false}>
        {items.map((item, index) => (
          <AlumniCard key={index} title={item.title} image={item.image} />
        ))}
      </Carousel>
    </Box>
  );
}
