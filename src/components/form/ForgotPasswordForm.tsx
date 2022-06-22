import { Box, Button, Divider, Group, Stack, Text, Title } from "@mantine/core";
import {
  GradientButton,
  Modal,
  showNotification,
  TextInput,
} from "components/common";
import {
  useForgotPasswordMutation,
  UserInputForgotPassword,
} from "generated/graphql";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "theme";
import { validateForgotPasswordForm } from "./formResolver";
import { useRouter } from "next/router";

export const ForgotPasswordForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const router = useRouter();
  const { classes } = useStyles();
  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    reset,
    formState: { errors, isValid },
  } = useForm<UserInputForgotPassword>({
    mode: "onChange",
  });

  const onSubmit = useCallback(
    async (values: UserInputForgotPassword) => {
      if (!validateForgotPasswordForm(values, setError, setFocus)) return;

      try {
        const res = await forgotPassword({ user: values }).unwrap();
        console.log({ res });
        setShowModal(true);
      } catch (e) {
        showNotification({
          message: e.message,
          id: "forgot-password-error",
        });
      }
    },
    [setError, setFocus, forgotPassword]
  );

  const onCancel = () => {
    reset();
    router.back();
  };

  const onCloseModal = () => {
    reset();
    router.push("/login");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextInput
          register={register("email", { required: true })}
          label="Email"
          error={errors.email}
          placeholder="Masukkan Alamat Email"
          sx={{ marginBottom: 57 }}
          autoComplete="email"
        />
        <Group
          position="apart"
          noWrap
          sx={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
              flexDirection: "column-reverse",
            },
          })}
        >
          <Link href="/" passHref>
            <Button
              variant="outline"
              fullWidth
              size="lg"
              component="a"
              onClick={onCancel}
              sx={{ borderWidth: 2 }}
            >
              Batal
            </Button>
          </Link>
          <GradientButton
            disabled={!isValid}
            type="submit"
            loading={isLoading}
            fullWidth
          >
            Reset
          </GradientButton>
        </Group>
      </form>
      <Modal
        opened={showModal}
        onClose={onCloseModal}
        centered
        size={552}
        closeOnClickOutside={false}
        closeOnEscape={false}
      >
        <Stack align="center" spacing={0}>
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
          <Text
            align="center"
            mb={20}
            mt={0}
            component="h3"
            weight={600}
            sx={{ fontSize: "1.5rem" }}
          >
            Periksa Email Anda!
          </Text>
          <Text
            align="center"
            color="dimmed"
            sx={{ maxWidth: 473, lineHeight: "28.8px" }}
          >
            Kami telah mengirimkan email ke akun anda dengan beberapa instruksi
            untuk me-reset password anda{" "}
          </Text>
          <Divider sx={{ width: "100%" }} my={30} />
          <Text
            align="center"
            color="dimmed"
            sx={{ maxWidth: 473, lineHeight: "28.8px" }}
            mb={20}
          >
            Jika anda memiliki kendala atau pertanyaan, silakan kirim pesan
            melalui email kami
          </Text>
          <Text
            align="center"
            sx={{ fontSize: "24px" }}
            color="orange"
            weight={600}
            mb={30}
          >
            ikata@email.com
          </Text>
          <GradientButton
            onClick={onCloseModal}
            sx={{ maxWidth: 360 }}
            fullWidth
          >
            Tutup
          </GradientButton>
        </Stack>
      </Modal>
    </>
  );
};
