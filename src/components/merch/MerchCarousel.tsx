import { Container, Box, Title, Text, Group } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { Carousel, CarouselBreakpoint } from "components/common";
import { MerchCard } from "components/merch";
import { useGetMerchListQuery } from "generated/mockGraphql";

const breakpoints: CarouselBreakpoint[] = [
  { breakpoint: 1111, settings: { slidesToShow: 3 } },
  { breakpoint: 840, settings: { slidesToShow: 2 } },
  { breakpoint: 575, settings: { slidesToShow: 1 } },
];

export function MerchCarousel() {
  const { data: merchList, isLoading } = useGetMerchListQuery({ limit: 5 });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={(theme) => ({ width: "100%", background: theme.white })}>
      <Container size={1128} pt={80} pb={50}>
        <Group position="apart" mb={58} align="baseline">
          <Title order={2} sx={(theme) => ({ color: theme.colors.dark })}>
            Merchandise
          </Title>
          <Text
            component={NextLink}
            variant="link"
            href="/merchandise"
            color="dark"
            weight="bold"
          >
            Lihat Semua
          </Text>
        </Group>
        <Box sx={{ height: "466px" }}>
          <Carousel slidesToShow={4} autoplay responsive={breakpoints}>
            {merchList?.getMerchList.map((merch) => (
              <MerchCard data={merch} key={merch.id} />
            ))}
          </Carousel>
        </Box>
      </Container>
    </Box>
  );
}
