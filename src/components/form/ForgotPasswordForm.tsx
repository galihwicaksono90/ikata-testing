import { yupResolver } from "@hookform/resolvers/yup";
import {
  Divider,
  Button,
  Group,
  TextInput,
  Stack,
  Box,
  Title,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { GradientButton, Modal } from "components/common";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "theme";
import * as yup from "yup";

interface FormProps {
  email: string;
}

const schema = yup.object({
  email: yup.string().email().required(),
});

export const ForgotPasswordForm = () => {
  const [showModal, setShowModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { classes } = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormProps>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback((values: FormProps) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (!errors) {
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
          {...register("email")}
          label="Email"
          error={!!errors.email}
          placeholder="Masukkan Alamat Email"
          size="lg"
          sx={{ marginBottom: 57 }}
        />
        <Group position="apart" noWrap>
          <Link href="/" passHref>
            <Button variant="outline" fullWidth size="lg" component="a">
              Batal
            </Button>
          </Link>
          <GradientButton
            type="submit"
            disabled={!isValid}
            variant={!isValid ? "default" : "gradient"}
            loading={isLoading}
            fullWidth
          >
            Reset
          </GradientButton>
        </Group>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          centered
          size={522}
        >
          <Stack align="center">
            <Box
              sx={{
                position: "relative",
                width: 178,
                height: 161,
                marginBottom: 40,
              }}
            >
              <Image src="/email.png" layout="fill" />
            </Box>
            <Title order={3} align="center" mb={20}>
              Periksa Email Anda!
            </Title>
            <Text align="center">
              Kami telah mengirimkan email ke akun anda dengan beberapa
              instruksi untuk me-reset password anda{" "}
            </Text>
            <Divider sx={{ width: "100%" }} my={20} />
            <Text align="center">
              Jika anda memiliki kendala atau pertanyaan, silakan kirim pesan
              melalui email kami
            </Text>
            <Text
              align="center"
              sx={{ fontSize: "24px" }}
              color="orange"
              weight="bold"
            >
              ikata@email.com
            </Text>
          </Stack>
        </Modal>
      </form>
    </>
  );
};
