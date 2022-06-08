import {
  Divider,
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
  SuccessModal,
} from "components/common";
import { createClassYears } from "utils/createClassYears";
import Image from "next/image";
import { registerFormResolver } from "./formResolver";
import { useRegisterMutation } from "generated/graphql";

interface RegisterFormProps {
  fullName: string;
  nickName: string;
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
    formState: { errors },
  } = useForm<RegisterFormProps>({
    mode: "onSubmit",
    resolver: registerFormResolver,
  });
  const [registerUser, { isLoading, isError, data: registerData }] =
    useRegisterMutation();

  const onSubmit = useCallback(async (values: RegisterFormProps) => {
    try {
      const registerData = await registerUser(values).unwrap();
      console.log({ registerData });
      setShowModal(true);
    } catch (error) {
      showNotification({
        title: "Error",
        message: error?.message,
        id: "register-error",
      });
    }
  }, []);

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
          register={register("nickName")}
          label="Nama Panggilan"
          placeholder="Masukkan Nama Panggilan"
          optional
        />
        <TextInput
          register={register("suffixTitle")}
          label="Gelar Depan"
          placeholder="Masukkan Gelar Depan"
          optional
        />
        <TextInput
          register={register("prefixTitle")}
          label="Gelar Belakang"
          placeholder="Masukkan Gelar Belakang"
          optional
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
          label="Konfirmasi Password"
          placeholder="Konfirmasi Password"
          error={errors.confirmPassword}
        />
        <Text>
          Password harus merupakan gabungan huruf kecil, besar, dan angka dengan
          panjang minimal 6 karakter
        </Text>
        <Divider mt={30} />
        <GradientButton type="submit" fullWidth mt={45} loading={isLoading}>
          Daftar Baru
        </GradientButton>
      </form>
      <SuccessModal
        opened={showModal}
        onClose={() => setShowModal(false)}
        title="Pendaftaran Akun Berhasil"
        message="Saat ini akun anda sedang dalam tahap verifikasi oleh admin kami.
            Harap menunggu hasil verifikasi maksimal 2 x 24 jam untuk
            mendapatkan login."
        href="/"
        buttonLabel="Kembali ke Beranda"
      />
    </>
  );
};
