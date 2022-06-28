import { Box, AspectRatio, Text } from "@mantine/core";
import Image from "next/image";

interface NoDataProps {
  light?: boolean;
}

export const NoData = ({ light }: NoDataProps) => {
  return (
    <Box sx={{ width: "100%" }} py={40}>
      <AspectRatio
        ratio={467 / 456}
        sx={{
          position: "relative",
          maxWidth: 467,
          display: "flex",
        }}
        mx="auto"
      >
        <Image src="/noData.svg" layout="fill" alt="" />
      </AspectRatio>
      <Text
        mt={80}
        align="center"
        size="xl"
        weight={500}
        sx={(theme) => ({
          color: light ? theme.colors.dark[8] : theme.white,
        })}
      >
        Belum ada data ditampilkan
      </Text>
    </Box>
  );
};
