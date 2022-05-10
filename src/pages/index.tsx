import { Container, Box } from "@mantine/core";
import { MainLayout } from "components/layouts";
import HeroImage from "components/HeroImage";
import News from "components/News";
import AdBanner from "components/AdBanner";
import Articles from "components/Articles";
import Alumni from "components/Alumni";
import MerchandiseCarousel from "components/MerchandiseCarousel";

import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  return (
    <MainLayout>
      <HeroImage />
      <News />
      <AdBanner src="/banner1.png" />
      <Articles />
      <Alumni />
      <AdBanner src="/banner2.png" />
      <MerchandiseCarousel />
    </MainLayout>
  );
}
