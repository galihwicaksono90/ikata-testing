import { Box, Stack, Text, Title } from "@mantine/core";
import {
  GradientButton,
  Modal,
  showNotification,
  PasswordInput,
} from "components/common";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "theme";
import { resetPasswordResolver } from "./formResolver";

interface FormProps {
  password: string;
  confirmPassword: string;
}

export const ResetPasswordForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { classes } = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: resetPasswordResolver });

  const onSubmit = useCallback((values: FormProps) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log({ isValid });
      if (!errors) {
        return;
      }
      setIsLoading(false);
      setShowModal(true);
    }, 2000);
  }, []);

  const onError = useCallback((errors, e) => {
    if (errors?.password?.type === "matches") {
      showNotification({
        message: errors.password.message,
        id: "password-error",
      });
    }
    if (errors?.confirmPassword?.type === "oneOf") {
      showNotification({
        message: errors.confirmPassword.message,
        id: "confirm-password-error",
      });
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} className={classes.form}>
        <PasswordInput
          register={register("password")}
          error={errors.password}
          label="Password"
          placeholder="Masukkan Password"
        />
        <PasswordInput
          register={register("confirmPassword")}
          error={errors.confirmPassword}
          label="Konfirmasi Password"
          placeholder="Konfirmasi Password"
        />
        <GradientButton
          type="submit"
          loading={isLoading}
          fullWidth
          disabled={!isValid}
        >
          Simpan
        </GradientButton>
      </form>
      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        closable={false}
        centered
        size={522}
      >
        <Stack align="center" spacing={30}>
          <Box sx={{ position: "relative", width: 192, height: 150 }}>
            <Image src="/warning.png" layout="fill" />
          </Box>
          <Title order={3} align="center">
            Password Berhasil Dirubah
          </Title>
          <Text
            align="center"
            sx={(theme) => ({ color: theme.colors.dark[4] })}
          >
            Silakan kembali ke halaman login dan gunakan password baru anda
            untuk masuk ke halaman website
          </Text>
          <GradientButton href="/login" fullWidth>
            Login
          </GradientButton>
        </Stack>
      </Modal>
    </>
  );
};
