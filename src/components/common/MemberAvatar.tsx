import { Avatar, Box, Skeleton, Stack, Text } from "@mantine/core";
import { IconMail } from "@tabler/icons";
import { Member } from "generated/mockGraphql";

export interface MemberAvatarProps {
  loading?: boolean;
  data?: Member;
  withTitle?: boolean;
  withClassYear?: boolean;
}

const MemberAvatarSkeleton = () => {
  return (
    <>
      <Skeleton
        circle
        sx={(theme) => ({
          height: 170,
          width: 170,
          borderRadius: "50%",
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            height: 156,
            width: 156,
          },
        })}
        mb={20}
      />
      <Skeleton height={16} mb={20} />
      <Skeleton height={14} width="60%" mb={20} />
      <Skeleton height={14} width="75%" />
    </>
  );
};

export function MemberAvatar({
  data,
  loading,
  withTitle,
  withClassYear,
}: MemberAvatarProps) {
  return (
    <Stack
      align="center"
      //mb={35}
      sx={{
        height: 339,
        minHeight: 339,
        "& .mantine-Text-root": {
          lineHeight: "32.4px",
        },
      }}
      spacing={3}
      mx={5}
    >
      {loading || !data ? (
        <MemberAvatarSkeleton />
      ) : (
        <>
          <Avatar
            radius="xl"
            sx={(theme) => ({
              height: 170,
              width: 170,
              marginBottom: 20,
              [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                height: 156,
                width: 156,
              },
            })}
            src={data.image}
          />
          <Text size="lg" weight={600} align="center">
            {data.name}
          </Text>

          <Text
            color="dimmed"
            size="sm"
            weight={500}
            align="center"
            lineClamp={1}
          >
            {withTitle && !!data?.title ? data.title : null}{" "}
            {withTitle && withClassYear ? "|" : null}{" "}
            {withClassYear && !!data?.classYear ? data.classYear : null}
          </Text>
          {data.email ? (
            <Text size="sm" weight={500}>
              {data.email}
            </Text>
          ) : (
            <Box
              component={IconMail}
              sx={(theme) => ({ color: theme.colors.dark[3] })}
            />
          )}
        </>
      )}
    </Stack>
  );
}
