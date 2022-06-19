import { Text } from "@mantine/core";
import {
  GradientButton,
  PasswordInput,
  SuccessModal,
  showNotification,
} from "components/common";
import { useUpdatePasswordMutation } from "generated/graphql";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "theme";
import { validateResetPasswordForm } from "./formResolver";

export interface ResetPasswordFormProps {
  password: string;
  confirmPassword: string;
}

export const ResetPasswordForm = () => {
  const [showModal, setShowModal] = useState(false);
  const { classes } = useStyles();
  const [updatePassword, { isLoading }] = useUpdatePasswordMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    formState: { errors, isValid },
  } = useForm<ResetPasswordFormProps>({ mode: "onChange" });

  const onSubmit = useCallback(
    async (values: ResetPasswordFormProps) => {
      if (!validateResetPasswordForm(values, setError, setFocus)) return;

      try {
        const token = router.query.token;
        const response = await updatePassword({
          user: {
            password: values.password,
            token: token as string,
          },
        }).unwrap();
        if (!response.updatePassword.isValid) throw Error;
        setShowModal(true);
      } catch (error) {
        showNotification({
          message: "Mohon maaf sedang terjadi gangguan mohon coba lagi",
          id: "reset-password",
        });
      }
    },
    [router.query.token, setError, setFocus, , updatePassword]
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <PasswordInput
          register={register("password", { required: true })}
          error={errors.password}
          label="Password"
          placeholder="Masukkan Password"
          id="reset-password"
        />
        <PasswordInput
          register={register("confirmPassword", { required: true })}
          error={errors.confirmPassword}
          label="Konfirmasi Password"
          placeholder="Konfirmasi Password"
          id="confirm-reset-password"
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
