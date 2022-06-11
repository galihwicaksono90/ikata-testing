import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseFormSetError } from "react-hook-form";

export interface LoginFormProps {
  email: string;
  password: string;
}

const numberRegex = /^\d+$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,13}$/;

export const errorMessage = {
  required: "Wajib diisi",
  selectOne: "Pilih salah satu",
  email: "Format email, cth: ikata@zzz.com",
  password:
    "Password harus berisi maksimal 13 karakter, minimal 6 karakter, satu huruf kapital, satu huruf kecil, dan satu angka",
  confirmPassword: "Kombinasi password tidak sesuai.",
  number: "Wajib menggunakan angka",
};

export const validateLoginForm = (
  values: LoginFormProps,
  setError: UseFormSetError<LoginFormProps>
): boolean => {
  if (!values.email.match(emailRegex)) {
    setError("email", { message: errorMessage.email }, { shouldFocus: true });
    return false;
  }

  return true;
};

const required = yup.string().required(errorMessage.required);
const email = yup
  .string()
  .email(errorMessage.email)
  .required(errorMessage.required);
const gender = yup.string().required(errorMessage.selectOne);
const classYear = yup.string().required(errorMessage.selectOne);
const nim = yup.number().integer().positive().required(errorMessage.required);
const fullName = yup.string().required(errorMessage.required);
const phone = yup
  .string()
  .max(13)
  .matches(numberRegex, errorMessage.number)
  .required(errorMessage.required);
const loginPassword = yup.string().required();
const password = yup
  .string()
  .required(errorMessage.required)
  .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,13}$/, errorMessage.password);
const confirmPassword = yup
  .string()
  .required(errorMessage.required)
  .equals([yup.ref("password"), null], errorMessage.confirmPassword);

export const registerFormResolver = yupResolver(
  yup.object({
    fullName,
    email,
    phone,
    gender,
    classYear,
    nim,
    password,
    confirmPassword,
  })
);

export const forgotPasswordResolver = yupResolver(
  yup.object({
    email,
  })
);

export const resetPasswordResolver = yupResolver(
  yup.object({
    password,
    confirmPassword,
  })
);
