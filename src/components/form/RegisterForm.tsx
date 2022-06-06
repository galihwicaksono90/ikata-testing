import {
  Group,
  Box,
  Text,
  RadioGroup,
  Radio,
  Select,
  Stack,
  Title,
} from "@mantine/core";
import { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useStyles } from "theme";
import {
  GradientButton,
  Modal,
  showNotification,
  PasswordInput,
  TextInput,
} from "components/common";
import { createClassYears } from "utils/createClassYears";
import Image from "next/image";
import { registerFormResolver } from "./formResolver";
import { useRegisterMutation } from "generated/graphql";

interface RegisterFormProps {
  fullName: string;
  prefixTitle: string;
  suffixTitle: string;
  email: string;
  phone: number;
  gender: string;
  classYear: string;
  nim: number;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  useState<boolean>(false);
  const { classes } = useStyles();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<RegisterFormProps>({
    mode: "onSubmit",
    resolver: registerFormResolver,
  });
  const [registerUser, { isLoading, data: registerData }] =
    useRegisterMutation();

  const onSubmit = useCallback(
    async (values: RegisterFormProps) => {
      try {
        const registerData = await registerUser(values).unwrap();
        console.log({ registerData });
      } catch (error) {
        showNotification({
          title: "Error",
          message: error?.message,
          id: "register-error",
        });
      }
    },
    [registerUser]
  );

  /* const onError = useCallback((errors: any, e) => {
   *   if (errors?.password?.type === "matches") {
   *     showNotification({
   *       message: errors.password.message,
   *       id: "password-error",
   *     });
   *   }
   *   if (errors?.confirmPassword?.type === "oneOf") {
   *     showNotification({
   *       message: errors.confirmPassword.message,
   *       id: "confirm-password-error",
   *     });
   *   }
   *   showNotification({
   *     message: "Form tidak boleh kosong. Harap isi semua form dengan benar",
   *     id: "register-error",
   *   });
   * }, []);
   */

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextInput
          register={register("fullName")}
          label="Nama Lengkap"
          placeholder="Masukkan Nama Lengkap"
          error={errors.fullName}
        />
        <TextInput
          register={register("suffixTitle")}
          description="Optional"
          label="Gelar Depan"
          placeholder="Gelar Depan"
        />
        <TextInput
          register={register("prefixTitle")}
          description="Optional"
          label="Gelar Belakang"
          placeholder="Gelar Belakang"
        />
        <TextInput
          autoComplete="off"
          register={register("email")}
          label="Email"
          placeholder="Masukkan Email"
          error={errors.email}
        />
        <TextInput
          register={register("phone")}
          maxLength={13}
          min={0}
          label="Nomor Telepon"
          placeholder="Masukkan Nomor Telepon"
          error={errors.phone}
          type="number"
        />
        <Group noWrap position="apart" align="flex-start">
          <Controller
            name="gender"
            control={control}
            render={({ field }) => {
              return (
                <RadioGroup
                  label="Jenis Kelamin"
                  {...field}
                  error={!!errors?.gender ? errors.gender.message : null}
                  size="lg"
                >
                  <Radio value="male" label="Pria" />
                  <Radio value="female" label="Wanita" />
                </RadioGroup>
              );
            }}
          />
          <Controller
            name="classYear"
            control={control}
            render={({ field }) => {
              return (
                <Select
                  {...field}
                  label="Pilih Angkatan"
                  data={createClassYears()}
                  placeholder="-Pilih Angkatan-"
                  searchable
                  size="lg"
                  error={!!errors?.classYear ? errors.classYear.message : null}
                />
              );
            }}
          ></Controller>
        </Group>
        <TextInput
          register={register("nim")}
          label="Nomor Induk Mahasiswa"
          placeholder="Masukkan Nomor Induk Mahasiswa"
          error={errors.nim}
          type="number"
          min={0}
        />
        <PasswordInput
          register={register("password")}
          label="Password"
          placeholder="Masukkan Password"
          error={errors.password}
        />
        <PasswordInput
          register={register("confirmPassword")}
          label="Confirm Password"
          placeholder="Konfirmasi Password"
          error={errors.confirmPassword}
        />
        <GradientButton type="submit" fullWidth my={50} loading={isLoading}>
          Daftar Baru
        </GradientButton>
      </form>
      <Modal
        opened={showModal}
        onClose={() => setShowModal(false)}
        closable={false}
        centered
        radius="lg"
        size={522}
      >
        <Stack align="center">
          <Box sx={{ position: "relative", width: 192, height: 150 }}>
            <Image src="/warning.png" layout="fill" alt="" />
          </Box>
          <Title order={3} align="center">
            Pendaftaran Akun Berhasil
          </Title>
          <Text align="center">
            Saat ini akun anda sedang dalam tahap verifikasi oleh admin kami.
            Harap menunggu hasil verifikasi maksimal 2 x x24 jam untuk
            mendapatkan login.
          </Text>
          <GradientButton href="/">Kembali ke Beranda</GradientButton>
        </Stack>
      </Modal>
    </>
  );
};
