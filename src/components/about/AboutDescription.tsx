import { useGetAboutQuery, About } from "generated/graphql";
import { Title, Text, Box, AspectRatio } from "@mantine/core";
import Image from "next/image";

interface AboutDescriptionProps {
  title: string;
  data: About;
}

export const AboutDescription = ({ data, title }: AboutDescriptionProps) => {
  /* const { data: about, isLoading } = useGetAboutQuery({ type }); */

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
          alt=""
        />
      </AspectRatio>
      <Title mb={21}>{title}</Title>
      <Text sx={{ whiteSpace: "pre-line" }}>{data.description}</Text>
    </div>
  );
};
