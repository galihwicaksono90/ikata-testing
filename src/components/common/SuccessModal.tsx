import { Box, Stack, Text } from "@mantine/core";
import { GradientButton, Modal, ModalProps } from "components/common";
import Image from "next/image";

interface Props extends ModalProps {
  title: string;
  message: string;
  href: string;
  buttonLabel: string;
}

export const SuccessModal = ({
  href,
  buttonLabel,
  message,
  title,
  children,
  onClose,
  ...rest
}: Props) => {
  return (
    <Modal
      {...rest}
      onClose={onClose}
      centered
      size={552}
      radius="lg"
      closable={false}
    >
      <Stack align="center">
        <Box
          sx={{
            position: "relative",
            width: 192,
            height: 150,
            marginBottom: "36.11px",
          }}
        >
          <Image src="/success.svg" layout="fill" alt="" />
        </Box>
        <Text sx={{ fontSize: "1.5rem" }} align="center" mb={20} weight="bold">
          {title}
        </Text>
        <Text
          align="center"
          sx={(theme) => ({
            color: theme.colors.dark[4],
            lineHeight: "28.8px",
          })}
          mb={40}
        >
          {message}
        </Text>
        <GradientButton href={href} sx={{ maxWidth: 360 }} fullWidth>
          {buttonLabel}
        </GradientButton>
      </Stack>
    </Modal>
  );
};
