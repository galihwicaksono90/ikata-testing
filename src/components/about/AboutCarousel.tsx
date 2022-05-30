import React from "react";
import { Carousel } from "components/common";
import { Stack, Title, Text, Box } from "@mantine/core";
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
    <Stack>
      <Box sx={{ textAlign: "center", marginBottom: 40 }}>
        <Title mb={14}>Ketua IKATA</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
      </Box>
      <Carousel arrows dots={false}>
        {data.map((testimony) => (
          <TestimonyCard data={testimony} key={testimony.id} />
        ))}
      </Carousel>
    </Stack>
  );
};
