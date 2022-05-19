import { showNotification } from "@mantine/notifications";
import { AlertOctagon } from "tabler-icons-react";
import { DefaultMantineColor } from "@mantine/core";

interface NotificationProps {
  title: string;
  message: string;
  color: DefaultMantineColor;
}

export default function notification({
  title,
  message,
  color,
}: NotificationProps) {
  showNotification({
    title,
    message,
    icon: <AlertOctagon />,
    color,
  });
}
