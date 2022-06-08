import { Box, Stack, Text, Title } from "@mantine/core";
import {
  GradientButton,
  Modal,
  showNotification,
  PasswordInput,
  SuccessModal,
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
          error={!!errors.password}
          label="Password"
          placeholder="Masukkan Password"
        />
        <PasswordInput
          register={register("confirmPassword")}
          error={!!errors.confirmPassword}
          label="Konfirmasi Password"
          placeholder="Konfirmasi Password"
        />
        <Text sx={{ lineHeight: "28.8px" }}>
          Password harus merupakan gabungan huruf kecil, besar, dan angka dengan
          panjang minimal 8 karakter
        </Text>
        <GradientButton
          type="submit"
          loading={isLoading}
          fullWidth
          disabled={!isValid}
        >
          Simpan
        </GradientButton>
      </form>
      <SuccessModal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title="Password Berhasil Diubah"
        message="Silakan kembali ke halaman login dan gunakan password baru anda untuk masuk ke halaman website"
        href="/login"
        buttonLabel="Login"
      />
    </>
  );
};
