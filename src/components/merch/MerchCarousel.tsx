import { EmblaCarousel } from "components/common";
import { MerchCard } from "components/merch";
import { MerchandisesType } from "generated/graphql";

const breakpoints = [
  {
    smallerThan: 1220,
    slidesPerView: 3,
  },
  {
    smallerThan: 959,
    slidesPerView: 2,
  },
  {
    smallerThan: 671,
    slidesPerView: 1,
  },
];

interface MerchCarouselProps {
  data: MerchandisesType[];
}

export function MerchCarousel({ data }: MerchCarouselProps) {
  return (
    <EmblaCarousel
      loop
      slidesPerView={4}
      withArrows
      marginsBetween={4}
      breakpoints={breakpoints}
      withDots
      autoplay
    >
      {data?.map((item) => (
        <MerchCard key={item.id} data={item} />
      ))}
    </EmblaCarousel>
  );
}
