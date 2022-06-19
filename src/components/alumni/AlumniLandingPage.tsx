import { Box, BoxProps, Text } from "@mantine/core";
import { SectionContainer, TextLink } from "components/common";
import { Alumni, useGetAlumniBusinessesQuery } from "generated/mockGraphql";
import Image from "next/image";

const gridDictionary = ["one", "two", "three", "four"];
const gridTemplates = {
  lg: [
    '"one one" "one one"',
    '"one one two two" "one one two two"',
    '"one one two two" "one one three three"',
    '"one one two two" "one one three four"',
  ],
  md: [
    '"one one"',
    '"one one two two"',
    '"one one two two" "one one three three"',
    '"one one two two" "one one three three" "one one four four"',
  ],
  sm: [
    '"one one"',
    '"one one" "one one" "two two" "two two"',
    '"one one" "one one" "two two" "three three"',
    '"one one" "one one" "two two" "three four"',
  ],
  xs: [
    '"one one"',
    '"one one" "one one" "two two" "two two"',
    '"one one" "one one" "two two" "three three"',
    '"one one" "one one" "two two" "three three" "four four"',
  ],
};

export function AlumniLandingPage() {
  const { data, isLoading } = useGetAlumniBusinessesQuery({ limit: 4 });

  if (isLoading) <div>Loading...</div>;

  return (
    <SectionContainer
      title="BISNIS ALUMNI TAMBANG"
      noData={!data?.getAlumniBusinesses.length}
      rightItem={
        <TextLink href="/alumni-business" weight={600}>
          Lihat Semua
        </TextLink>
      }
      lightBackground
    >
      <Box
        sx={(theme) => ({
          display: "grid",
          gridTemplateAreas:
            gridTemplates["lg"][data?.getAlumniBusinesses.length - 1],
          height: "612px",
          [`@media (max-width: ${theme.breakpoints.md}px)`]: {
            gridTemplateAreas:
              gridTemplates["md"][data?.getAlumniBusinesses.length - 1],
          },
          [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            gridTemplateAreas:
              gridTemplates["sm"][data?.getAlumniBusinesses.length - 1],
            height: "850px",
          },
          [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
            gridTemplateAreas:
              gridTemplates["xs"][data?.getAlumniBusinesses.length - 1],
          },
        })}
      >
        {data?.getAlumniBusinesses.map((alumni, index) => (
          <Card
            data={alumni}
            key={alumni.id}
            sx={{
              gridArea: gridDictionary[index],
            }}
            href={index === 0 ? `/alumni/${alumni.id}` : null}
          />
        ))}
      </Box>
    </SectionContainer>
  );
}

const Card = ({
  data,
  sx,
  href,
}: BoxProps<"div"> & { data: Alumni; href?: string }) => {
  return (
    <Box sx={{ position: "relative", height: "100%", width: "100%", ...sx }}>
      <Box
        sx={(theme) => ({
          //height: 126,
          background: theme.other.darkGradient,
          zIndex: 41,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "30px 20px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        })}
      >
        <Text
          size="lg"
          sx={{ lineHeight: "32.4px" }}
          weight={600}
          lineClamp={2}
          color="primary"
        >
          {data.name}
        </Text>
        {!!href ? (
          <TextLink sx={{ width: "100%" }} weight={600} href={href}>
            Lihat Profil
          </TextLink>
        ) : null}
      </Box>
      <Box
        sx={(theme) => ({
          position: "relative",
          ...theme.fn.cover(),
        })}
      >
        <Image
          src={data.image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
      </Box>
    </Box>
  );
};
