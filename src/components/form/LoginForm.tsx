import { yupResolver } from "@hookform/resolvers/yup";
import { Group, Text, TextInput, UnstyledButton } from "@mantine/core";
import { Eye, EyeOff } from "tabler-icons-react";
import { NextLink } from "@mantine/next";
import { GradientButton, showNotification } from "components/common";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "theme";
import * as yup from "yup";

interface LoginFormProps {
  nim: number;
  password: string;
}

const schema = yup.object({
  nim: yup.number().required(),
  password: yup.string().required(),
});

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { classes } = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<LoginFormProps>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((values: LoginFormProps) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (values.password !== "password" || values.nim !== 1234) {
        setError("nim", { message: "" });
        setError("password", { message: "" });

        showNotification({
          message: "Nomor induk Makasiswa / Password tidak terdaftar",
          id: "login-error",
          radius: "xs",
        });
        return;
      }

      showNotification({
        title: `Hi!`,
        message: `Selamat datang kembali!`,
      });

      router.push("/");
    }, 2000);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <TextInput
        {...register("nim")}
        label="Nomor Induk Mahasiswa"
        error={!!errors.nim}
        type="number"
        size="lg"
      />
      <TextInput
        {...register("password")}
        label="Password"
        error={!!errors.password}
        type={showPassword ? "text" : "password"}
        size="lg"
        rightSection={
          <UnstyledButton
            onClick={() => setShowPassword((o) => !o)}
            sx={{ height: 22 }}
          >
            {showPassword ? <EyeOff color="gray" /> : <Eye color="gray" />}
          </UnstyledButton>
        }
      />
      <Group position="right" mb={40}>
        <Text
          variant="link"
          component={NextLink}
          href="/forgot-password"
          weight="bold"
        >
          Lupa Password?
        </Text>
      </Group>
      <GradientButton
        type="submit"
        disabled={!isValid}
        fullWidth
        loading={isLoading}
        mb={50}
      >
        Login
      </GradientButton>
      <Group position="center">
        <Text
          variant="link"
          component={NextLink}
          href="/register"
          weight="bold"
        >
          Daftar Baru
        </Text>
      </Group>
    </form>
  );
}
