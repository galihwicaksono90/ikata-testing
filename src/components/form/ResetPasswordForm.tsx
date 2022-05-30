import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Stack, Text, TextInput, Title } from "@mantine/core";
import { GradientButton, Modal } from "components/common";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "tabler-icons-react";
import { useStyles } from "theme";
import * as yup from "yup";

interface FormProps {
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .equals([yup.ref("password"), null]),
});

export const ResetPasswordForm = () => {
  const [showModal, setShowModal] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { classes } = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const onSubmit = useCallback((values: FormProps) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log({ isValid });
      if (!isValid) {
        return;
      }
      setIsLoading(false);
      setShowModal(true);
    }, 2000);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextInput
          {...register("password")}
          label="Password"
          placeholder="Masukkan Password"
          error={!!errors.password}
          type={showPassword ? "text" : "password"}
          size="lg"
          rightSection={
            <Box
              onClick={() => setShowPassword((o) => !o)}
              sx={{ height: 22, cursor: "pointer" }}
            >
              {showPassword ? <EyeOff color="gray" /> : <Eye color="gray" />}
            </Box>
          }
        />
        <TextInput
          {...register("confirmPassword")}
          label="Konfirmasi Password"
          placeholder="Konfirmasi Password"
          error={!!errors.password}
          type={showConfirmPassword ? "text" : "password"}
          size="lg"
          mb={40}
          rightSection={
            <Box
              onClick={() => setShowConfirmPassword((o) => !o)}
              sx={{ height: 22, cursor: "pointer" }}
            >
              {showConfirmPassword ? (
                <EyeOff color="gray" />
              ) : (
                <Eye color="gray" />
              )}
            </Box>
          }
        />
        <GradientButton
          type="submit"
          disabled={!isValid}
          variant={!isValid ? "default" : "gradient"}
          loading={isLoading}
          fullWidth
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
