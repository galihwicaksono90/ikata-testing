import { Box, Button, Divider, Group, Stack, Text, Title } from "@mantine/core";
import {
  GradientButton,
  Modal,
  showNotification,
  TextInput,
} from "components/common";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "theme";
import { forgotPasswordResolver } from "./formResolver";

interface FormProps {
  email: string;
}

export const ForgotPasswordForm = () => {
  const [showModal, setShowModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { classes } = useStyles();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormProps>({
    mode: "onChange",
    resolver: forgotPasswordResolver,
  });

  const onSubmit = useCallback((values: FormProps) => {
    setIsLoading(true);
    setTimeout(() => {
      if (values.email === "wrong@gmail.com") {
        showNotification({
          title: "Error",
          message: "Email not found",
        });
        setIsLoading(false);
        return;
      }
      setShowModal(true);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextInput
          register={register("email")}
          label="Email"
          error={!!errors.email}
          placeholder="Masukkan Alamat Email"
          sx={{ marginBottom: 57 }}
        />
        <Group position="apart" noWrap>
          <Link href="/" passHref>
            <Button variant="outline" fullWidth size="lg" component="a">
              Batal
            </Button>
          </Link>
          <GradientButton
            type="submit"
            disabled={!isValid}
            loading={isLoading}
            fullWidth
          >
            Reset
          </GradientButton>
        </Group>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          centered
          size={552}
        >
          <Stack align="center">
            <Box
              sx={{
                position: "relative",
                width: 178,
                height: 161,
                marginBottom: 40,
              }}
            >
              <Image src="/email.png" layout="fill" alt="" />
            </Box>
            <Title order={3} align="center" mb={20}>
              Periksa Email Anda!
            </Title>
            <Text align="center">
              Kami telah mengirimkan email ke akun anda dengan beberapa
              instruksi untuk me-reset password anda{" "}
            </Text>
            <Divider sx={{ width: "100%" }} my={20} />
            <Text align="center">
              Jika anda memiliki kendala atau pertanyaan, silakan kirim pesan
              melalui email kami
            </Text>
            <Text
              align="center"
              sx={{ fontSize: "24px" }}
              color="orange"
              weight="bold"
            >
              ikata@email.com
            </Text>
            <GradientButton
              onClick={() => setShowModal((o) => !o)}
              sx={{ maxWidth: 360 }}
              fullWidth
            >
              Tutup
            </GradientButton>
          </Stack>
        </Modal>
      </form>
    </>
  );
};
