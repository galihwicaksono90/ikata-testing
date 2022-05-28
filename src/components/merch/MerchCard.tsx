import { Card, Box, Title, Text } from "@mantine/core";
import { GradientButton } from "components/common";
import { Merch } from "generated/graphql";
import Image from "next/image";

export interface MerchCardProps {
  data: Merch;
}

export function MerchCard({ data }: MerchCardProps) {
  const { id, name, price, image } = data;
  return (
    <Card
      mx="auto"
      sx={(theme) => ({
        width: 264,
        background: theme.white,
        border: `1px solid #EAEAEA`,
        height: 442,
        display: "flex",
        flexDirection: "column",
      })}
      withBorder
    >
      <Box
        sx={(theme) => ({
          position: "relative",
          height: 224,
          borderRadius: theme.radius.md,
          padding: 20,
          overflow: "hidden",
          marginBottom: 15,
        })}
      >
        <Image
          alt=""
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Title order={6} sx={(theme) => ({ color: theme.colors.dark })}>
        {name}
      </Title>
      <Box sx={{ marginTop: "auto" }}>
        <Text mb={20} color="gray" weight="bold">
          {price}
        </Text>
        <GradientButton fullWidth href={`/merchandise/${id}`}>
          Lihat Detail
        </GradientButton>
      </Box>
    </Card>
  );
}
