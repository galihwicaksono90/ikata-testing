import { Box, Stack, Text, Title } from "@mantine/core";
import { Container } from "components/common";
import { ResetPasswordForm } from "components/form";
import { LoginLayout, MainLayout } from "components/layouts";
import { api } from "generated/graphql";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { wrapper } from "redux/store";

interface Props {
  tokenValid?: boolean;
}

const ForgotPassword = ({ tokenValid }: Props) => {
  console.log({ tokenValid });
  if (!tokenValid) {
    return (
      <MainLayout>
        <Container light>
          <Stack align="center" sx={{ textAlign: "center" }}>
            <Box sx={{ position: "relative", height: 282, width: 282 }}>
              <Image src="/shareLink.png" layout="fill" />
            </Box>
            <Title>Link Kadaluarsa</Title>
            <Text>
              Halaman yang anda cari sudah tidak tersedia untuk saat ini.
            </Text>
          </Stack>
        </Container>
      </MainLayout>
    );
  }

  return (
    <LoginLayout containerSize={408} headerTitle="Reset Password" center>
      <Text align="center" mb={40}>
        Masukkan password baru anda
      </Text>
      <ResetPasswordForm />
    </LoginLayout>
  );
};

export default ForgotPassword;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ query }) => {
    const token = query.token;
    let tokenValid = false;

    try {
      const response = await store.dispatch(
        api.endpoints.ValidateResetToken.initiate({ token: token as string })
      );
      console.log({ response });
      if (!!response["data"]) {
        tokenValid = response["data"].validateResetToken;
      }
    } catch (e) {}

    return {
      props: {
        tokenValid: tokenValid,
      },
    };
  });
