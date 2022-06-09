import {
  showNotification as baseShowNotification,
  NotificationProps as BaseNotificationProps,
} from "@mantine/notifications";

export const showNotification = ({ ...rest }: BaseNotificationProps) => {
  baseShowNotification({
    ...rest,
    sx: (theme) => ({
      border: `1px solid ${theme.primaryColor}`,
    }),
    radius: "xs",
  });
};
