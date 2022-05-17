import { Button, Group, Input, InputWrapper, Text } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { NextLink } from "@mantine/next";
import { useLoginMutation } from "generated/graphql";
import { useForm } from "react-hook-form";
import { useStyles } from "theme";
import { X } from "tabler-icons-react";
import { useRouter } from "next/router";

interface LoginFormProps {
  username: string;
  password: string;
}

export default function LoginForm() {
  const { classes } = useStyles();
  const [login, { error, isLoading, data: loginData }] = useLoginMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormProps>({ mode: "onChange" });

  const onSubmit = async (data: LoginFormProps) => {
    try {
      const response = await login(data).unwrap();

      showNotification({
        title: `Hi!`,
        message: `Selamat datang kembali ${response.login.username}!`,
      });
      router.push("/");
    } catch (e) {
      showNotification({
        title: "Login Error",
        message: "Invalid credentials provided",
        id: "login-error",
        icon: <X />,
        color: "red",
      });
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <InputWrapper label="Username" error={errors?.username?.message}>
        <Input
          {...register("username", { required: "Please enter your username" })}
        />
      </InputWrapper>
      <InputWrapper label="Password" error={errors?.password?.message}>
        <Input
          type="password"
          {...register("password", { required: "Please enter your password" })}
        />
      </InputWrapper>
      <Group position="right" mb={40}>
        <Text variant="link" component={NextLink} href="/">
          Lupa Password?
        </Text>
      </Group>
      <Button
        type="submit"
        disabled={!isValid}
        size="md"
        fullWidth
        variant={isValid ? "gradient" : "default"}
        gradient={{
          from: "#feb240",
          to: "#fe9040",
          deg: 94,
        }}
        loading={isLoading}
      >
        {!isLoading ? "Login" : null}
      </Button>
    </form>
  );
}
