import { Group, Center, Text, Stack } from "@mantine/core";
import { SectionTitleWithLink } from "components/common";
import Image from "next/image";

interface ActivityItemProps {
  title: string;
  image: string;
}

interface Props {
  title: string;
  data: ActivityItemProps[];
  href: string;
}

export function ActivityItemList({ title, data, href }: Props) {
  return (
    <Stack spacing={20}>
      <SectionTitleWithLink title={title} href={href} />
      <Stack>
        {data.map((item, index) => (
          <ActivityItem title={item.title} image={item.image} key={index} />
        ))}
      </Stack>
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
        <Image alt="" src={image} layout="fill" objectFit="cover" />
      </Center>
      <Text weight="bold" size="lg">
        {title}
      </Text>
    </Group>
  );
}
