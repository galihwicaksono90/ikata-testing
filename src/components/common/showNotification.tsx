import {
  showNotification as baseShowNotification,
  NotificationProps as BaseNotificationProps,
} from "@mantine/notifications";

export const showNotification = ({ ...rest }: BaseNotificationProps) => {
  baseShowNotification({
    ...rest,
    sx: (theme) => ({
      border: `1px solid ${theme.primaryColor}`,
      paddingLeft: 14,
      "&::before": {
        background: "transparent",
      },
    }),
    radius: "xs",
  });
};
