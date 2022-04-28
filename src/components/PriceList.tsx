import { useMemo } from "react";
import { getCurrentDate } from "utils/time";
import {
  Paper,
  PaperProps,
  Text,
  createStyles,
  Divider,
  Group,
  Stack,
} from "@mantine/core";
import { ArrowUp, ArrowDown, Equal } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  container: {
    background: theme.colors.dark[6],
    padding: 20,
  },
  item: {
    marginBottom: 20,
  },
  text: {
    fontSize: "14px",
    lineHeight: "25px",
    fontWeight: 600,
  },
}));

export default function PriceList(props: PaperProps<"div">) {
  const { classes } = useStyles();

  const date = useMemo(() => getCurrentDate(), []);

  return (
    <Paper className={classes.container} radius="lg" {...props}>
      <Text size="lg" mb={28} weight={600}>
        {date}
      </Text>
      <PriceItem title="Batubara" price="900.000" />
      <Divider mb={20} />
      <PriceItem title="Nikel" price="900.000" icon="down" />
      <Divider mb={20} />
      <PriceItem title="Emas" price="900.000" />
      <Divider mb={20} />
      <PriceItem title="Lain-lain" price="900.000" icon="equal" />
    </Paper>
  );
}

const PriceItem = ({
  title,
  price,
  icon = "up",
}: {
  title: string;
  price: string;
  icon?: "up" | "down" | "equal";
}) => {
  const arrowIcon = () => {
    switch (icon) {
      case "up":
        return <ArrowUp size={16} />;
      case "down":
        return <ArrowDown size={16} />;
      case "equal":
        return <Equal size={16} />;
      default:
        return <ArrowUp size={16} />;
    }
  };
  return (
    <Group position="apart" align="center" style={{ width: "100%" }} mb="10px">
      <Stack spacing={0}>
        <Text size="sm" weight="bold" style={{ lineHeight: "25px" }}>
          {title}
        </Text>
        <Text size="sm" weight="bold" style={{ lineHeight: "25px" }}>
          {price}
        </Text>
      </Stack>
      {arrowIcon()}
    </Group>
  );
};
