import { Stack, Title, Text, Box } from "@mantine/core";
import { TestimonyCard } from "components/about";
import { EmblaCarousel } from "components/common";
import { Testimony } from "generated/mockGraphql";

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
      <EmblaCarousel withArrows loop>
        {data.map((testimony) => (
          <TestimonyCard data={testimony} key={testimony.id} />
        ))}
      </EmblaCarousel>
    </Stack>
  );
};
