import { About } from "generated/mockGraphql";
import { Title, Text, AspectRatio } from "@mantine/core";
import Image from "next/image";

interface AboutDescriptionProps {
  title: string;
  data: About;
}

export const AboutDescription = ({ data, title }: AboutDescriptionProps) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <AspectRatio
        ratio={1127 / 528}
        sx={{
          position: "relative",
          marginBottom: 35,
        }}
      >
        <Image
          src={data.image}
          layout="fill"
          objectFit="cover"
          priority
          alt={title}
        />
      </AspectRatio>
      <Title mb={21}>{title}</Title>
      <Text sx={{ whiteSpace: "pre-line", lineHeight: "28.8px" }}>
        {data.description}
      </Text>
    </div>
  );
};
