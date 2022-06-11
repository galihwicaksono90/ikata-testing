import { LoginLayout } from "components/layouts";
import { ForgotPasswordForm } from "components/form";
import { Text } from "@mantine/core";

const ForgotPassword = () => {
  return (
    <LoginLayout containerSize={440} headerTitle="Lupa Password" center>
      <Text align="center" mb={40}>
        Masukkan alamat email anda. Kami akan mengimkan link untuk me-reset
        password anda.
      </Text>
      <ForgotPasswordForm />
    </LoginLayout>
  );
};

export default ForgotPassword;
