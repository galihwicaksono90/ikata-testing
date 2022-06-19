import { Affix, Transition, ActionIcon } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons";

export const BackToTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 27, right: 27 }}>
      <Transition transition="slide-up" mounted={scroll.y > 200}>
        {(transitionStyles) => (
          <ActionIcon
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
            radius="xl"
            sx={(theme) => ({
              background: theme.colors.orange[0],
              height: 54,
              width: 54,
              color: theme.colors.dark[8],
              "&:hover": {
                background: theme.fn.lighten(theme.colors.orange[0], 0.1),
              },
            })}
          >
            <IconArrowUp size={32} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};
