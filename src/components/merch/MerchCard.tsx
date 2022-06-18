import { Card, Box, Title, Text, Group } from "@mantine/core";
import { GradientButton } from "components/common";
import { Merch } from "generated/mockGraphql";
import Image from "next/image";

export interface MerchCardProps {
  data: Merch;
}

export function MerchCard({ data }: MerchCardProps) {
  const { id, name, price, image } = data;
  return (
    <Card
      sx={(theme) => ({
        //width: 264,
        height: 414,
        display: "flex",
        flexDirection: "column",
      })}
      //mx={6}
    >
      <Card.Section>
        <Box sx={{ position: "relative", height: 263 }}>
          <Image
            alt=""
            src={image}
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
          {name}
        </Text>
        <Text color="dimmed" weight="bold" mt="auto">
          {price}
        </Text>
      </Group>
    </Card>
  );
}
