import { Box, Card, Group, Text } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { MerchandisesType } from "generated/graphql";
import Image from "next/image";

export interface MerchCardProps {
  data: MerchandisesType;
}

export function MerchCard({ data }: MerchCardProps) {
  return (
    <Card
      sx={(theme) => ({
        height: 414,
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          backgroundColor: theme.fn.lighten(theme.colors.dark[8], 0.1),
        },
      })}
      component={NextLink}
      href={`/merchandise/${data.id}`}
    >
      <Card.Section>
        <Box sx={{ position: "relative", height: 263 }}>
          <Image
            alt=""
            src={data.thumbnailPath}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      </Card.Section>
      <Group
        mt={22}
        direction="column"
        position="apart"
        pb={16}
        sx={{ height: "100%" }}
      >
        <Text weight={600} sx={{ lineHeight: "28.8px" }} lineClamp={2}>
          {data.name}
        </Text>
        <Text color="dimmed" weight="bold" mt="auto">
          {data.price}
        </Text>
      </Group>
    </Card>
  );
}
