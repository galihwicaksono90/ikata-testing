import { yupResolver } from "@hookform/resolvers/yup";
import {
  Group,
  Box,
  Text,
  TextInput,
  RadioGroup,
  Radio,
  Select,
  Stack,
  Title,
} from "@mantine/core";
import { useCallback, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useStyles } from "theme";
import { Eye, EyeOff } from "tabler-icons-react";
import { GradientButton, Modal, showNotification } from "components/common";
import { createClassYears } from "utils/createClassYears";
import * as yup from "yup";
import Image from "next/image";

interface RegisterFormProps {
  fullName: string;
  prefixTitle: string;
  suffixTitle: string;
  email: string;
  phone: number;
  gender: string;
  class: string;
  nim: number;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  fullName: yup.string().max(60).min(3).required(),
  email: yup.string().email(),
  phone: yup.number().integer().positive().max(9999999999999).required(),
  gender: yup.string().required(),
  class: yup.string().required(),
  nim: yup.number().integer().positive().required(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,13}$/,
      "Harus berisi maksimal 13 karakter, minimal 6 karakter, satu huruf kapital, satu huruf kecil, dan satu karakter simbol"
    ),
  confirmPassword: yup
    .string()
    .required()
    .equals(
      [yup.ref("password"), null],
      "Kombinasi password tidak sesuai. Silakan periksa kembali password anda."
    ),
});

export const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setConfirmShowPassword] =
    useState<boolean>(false);
  const { classes } = useStyles();
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors, isValid },
  } = useForm<RegisterFormProps>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((values: RegisterFormProps) => {
    console.log({ values });
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (!isValid) {
        return;
      }
      setShowModal(true);
    }, 1000);
  }, []);

  const onError = useCallback((errors: any, e) => {
    console.log({ errors });
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

    showNotification({
      message: "Form tidak boleh kosong. Harap isi semua form dengan benar",
      id: "register-error",
    });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} className={classes.form}>
        <TextInput
          {...register("fullName")}
          label="Nama Lengkap"
          placeholder="Masukkan Nama Lengkap"
          error={!!errors.fullName}
          size="lg"
        />
        <TextInput
          {...register("prefixTitle")}
          label="Gelar Belakang"
          placeholder="Gelar Belakang"
          size="lg"
        />
        <TextInput
          {...register("suffixTitle")}
          label="Gelar Depan"
          placeholder="Gelar Depan"
          size="lg"
        />
        <TextInput
          {...register("email")}
          label="Email"
          placeholder="Masukkan Email"
          error={!!errors.fullName}
          size="lg"
        />
        <TextInput
          {...register("phone")}
          label="Nomor Telepon"
          placeholder="Masukkan Nomor Telepon"
          error={!!errors.phone}
          type="number"
          size="lg"
        />
        <Group noWrap position="apart">
          <Controller
            name="gender"
            control={control}
            render={({ field }) => {
              return (
                <RadioGroup
                  label="Pilih Angkatan"
                  {...field}
                  error={!!errors?.gender}
                >
                  <Radio value="male" label="Pria" />
                  <Radio value="female" label="Wanita" />
                </RadioGroup>
              );
            }}
          />
          <Controller
            name="class"
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
                  error={!!errors?.class}
                />
              );
            }}
          ></Controller>
        </Group>
        <TextInput
          {...register("nim")}
          label="Nomor Induk Mahasiswa"
          placeholder="Masukkan Nomor Induk Mahasiswa"
          error={!!errors.nim}
          type="number"
          size="lg"
        />
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
          rightSection={
            <Box
              onClick={() => setConfirmShowPassword((o) => !o)}
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
            <Image src="/warning.png" layout="fill" />
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
