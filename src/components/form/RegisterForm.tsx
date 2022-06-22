import { Divider, Group, Radio, RadioGroup, Select, Text } from "@mantine/core";
import {
  GradientButton,
  PasswordInput,
  showNotification,
  SuccessModal,
  TextInput,
} from "components/common";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useStyles } from "theme";
import { validateRegisterForm } from "./formResolver";
import {
  useRegisterMutation,
  UserInputTypeRegiste,
  GenderEnum,
} from "generated/graphql";
import { capitalize, createClassYears } from "utils";

export type RegisterFormProps = Omit<UserInputTypeRegiste, "classYear"> & {
  confirmPassword: string;
  classYear: string;
};

export const RegisterForm = () => {
  const [showModal, setShowModal] = useState(false);
  const { classes } = useStyles();
  const [registerUser, { isLoading }] = useRegisterMutation();
  const {
    register,
    handleSubmit,
    control,
    setError,
    setFocus,
    formState: { errors, isValid },
  } = useForm<RegisterFormProps>({
    mode: "onChange",
  });

  const onSubmit = useCallback(
    async (values: RegisterFormProps) => {
      if (!validateRegisterForm(values, setError, setFocus)) return;

      delete values.confirmPassword;

      const newValues: UserInputTypeRegiste = {
        ...values,
        classYear: parseInt(values.classYear),
        fullName: capitalize(values.fullName),
        email: values.email.toLowerCase(),
      };

      try {
        await registerUser({ user: newValues }).unwrap();
        setShowModal(true);
      } catch (e) {
        showNotification({
          message: e.message,
          id: "register-error",
        });
      }
    },
    [registerUser, setError, setFocus]
  );

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextInput
          register={register("fullName", { required: true })}
          label="Nama Lengkap"
          placeholder="Masukkan Nama Lengkap"
          error={errors.fullName}
        />
        <TextInput
          register={register("nickName", { required: true })}
          label="Nama Panggilan"
          placeholder="Masukkan Nama Panggilan"
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
          register={register("email", { required: true })}
          label="Email"
          placeholder="Masukkan Email"
          error={errors.email}
        />
        <TextInput
          register={register("phone", { required: true })}
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
            rules={{ required: true }}
            render={({ field }) => {
              return (
                <RadioGroup
                  label="Jenis Kelamin"
                  {...field}
                  error={!!errors?.gender ? errors.gender.message : null}
                  size="lg"
                >
                  <Radio value={GenderEnum.Pria} label="Pria" />
                  <Radio value={GenderEnum.Wanita} label="Wanita" />
                </RadioGroup>
              );
            }}
          />
          <Controller
            name="classYear"
            control={control}
            rules={{ required: true }}
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
          register={register("nim", { required: true })}
          label="Nomor Induk Mahasiswa"
          placeholder="Masukkan Nomor Induk Mahasiswa"
          error={errors.nim}
          type="number"
          min={0}
        />
        <PasswordInput
          register={register("password", { required: true })}
          label="Password"
          placeholder="Masukkan Password"
          error={errors.password}
        />
        <PasswordInput
          register={register("confirmPassword", { required: true })}
          label="Konfirmasi Password"
          placeholder="Konfirmasi Password"
          error={errors.confirmPassword}
        />
        <Text weight={500}>
          Password harus merupakan gabungan huruf kecil, besar, dan angka dengan
          panjang minimal 6 karakter
        </Text>
        <Divider mt={30} sx={{ backgroundColor: "#d9d9d9" }} />
        <GradientButton
          type="submit"
          fullWidth
          mt={45}
          loading={isLoading}
          disabled={!isValid}
        >
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
