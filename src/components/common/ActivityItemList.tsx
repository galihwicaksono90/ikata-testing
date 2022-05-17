import { Group, Center, Text, Stack } from "@mantine/core";
import { SectionTitleWithLink } from "components/common";
import Image from "next/image";

interface ActivityItemProps {
  title: string;
  image: string;
}

interface Props extends ActivityItemProps {
  title: string;
  data: ActivityItemProps[];
}

export default function ActivityItemList({ title, data }: Props) {
  return (
    <Stack>
      <SectionTitleWithLink title={title} href="/" />
      {data.map((item, index) => (
        <ActivityItem title={item.title} image={item.image} key={index} />
      ))}
    </Stack>
  );
}

function ActivityItem({ title, image }: ActivityItemProps) {
  return (
    <Group align="center" spacing={30}>
      <Center
        sx={{
          width: 72,
          height: 72,
          borderRadius: "12px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image src={image} layout="fill" objectFit="cover" />
      </Center>
      <Text weight="bold" size="lg">
        {title}
      </Text>
    </Group>
  );
}
