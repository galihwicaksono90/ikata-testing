import {
  Modal as BaseModal,
  ModalProps as BaseModalProps,
} from "@mantine/core";

export interface ModalProps extends BaseModalProps {
  closable?: boolean;
}

export const Modal = ({
  closable = true,
  children,
  radius = "lg",
  ...rest
}: ModalProps) => {
  return (
    <BaseModal
      closeOnClickOutside={closable}
      withCloseButton={closable}
      radius={radius}
      styles={(theme) => ({
        close: {
          color: theme.colors.dark,
          "&:hover": {
            background: theme.colors.dark[4],
          },
        },
        modal: {
          background: theme.white,
        },
        body: {
          background: theme.white,
          color: theme.colors.dark,
          borderRadius: theme.radius.lg,
        },
      })}
      {...rest}
    >
      {children}
    </BaseModal>
  );
};
