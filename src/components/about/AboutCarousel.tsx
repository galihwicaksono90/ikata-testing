import React from "react";
import { Carousel } from "components/common";
import { TestimonyCard } from "components/about";
import { Testimony } from "generated/graphql";

interface Props {
  data: Testimony[];
}

export const AboutCarousel = ({ data }: Props) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Carousel arrows dots={false}>
      {data.map((testimony) => (
        <TestimonyCard data={testimony} key={testimony.id} />
      ))}
    </Carousel>
  );
};
