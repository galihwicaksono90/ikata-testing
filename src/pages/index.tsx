import { Container } from "@mantine/core";
import Layout from "components/Layout";
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
    <Layout>
      <HeroImage />
      <Container size={1135} pt={60} pb={75}>
        <News />
        <AdBanner src="/banner1.png" />
        <Articles />
      </Container>
      <Alumni />
      <AdBanner src="/banner2.png" />
      <MerchandiseCarousel />
    </Layout>
  );
}
