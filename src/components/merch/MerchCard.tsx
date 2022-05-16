import { Card, Box, Title, Text, Button } from "@mantine/core";
import Image from "next/image";

export interface MerchCardProps {
  title: string;
  image: string;
  price: string;
}

export default function MerchandiseCard({
  image,
  title,
  price,
}: MerchCardProps) {
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
          src={image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
      <Title order={6} sx={(theme) => ({ color: theme.colors.dark })}>
        {title}
      </Title>
      <Box sx={{ marginTop: "auto" }}>
        <Text mb={20} color="gray" weight="bold">
          {price}
        </Text>
        <Button
          size="lg"
          fullWidth
          variant="gradient"
          gradient={{
            from: "#feb240",
            to: "#fe9040",
            deg: 94,
          }}
        >
          Lihat Detail
        </Button>
      </Box>
    </Card>
  );
}
