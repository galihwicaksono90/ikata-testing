import {
  Box,
  Container,
  Overlay,
  Paper,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { LoginForm } from "components/form";
import { LoginLayout } from "components/layouts";

export default function Login() {
  return (
    <LoginLayout containerSize={440} headerTitle="Login Anggota" center>
      <LoginForm />
    </LoginLayout>
  );
}
