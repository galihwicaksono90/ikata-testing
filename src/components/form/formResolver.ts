import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const messages = {
  required: "Tidak boleh kosong",
  selectOne: "Pilih salah satu",
  email: "Format email tidak valid",
  password:
    "Password harus berisi maksimal 13 karakter, minimal 6 karakter, satu huruf kapital, satu huruf kecil, dan satu angka",
  confirmPassword:
    "Kombinasi password tidak sesuai. Silakan periksa kembali password anda.",
};

const fullName = yup
  .string()
  .max(60)
  .min(3, "Minimal 3 huruf")
  .required(messages.required);
const email = yup.string().email(messages.email).required(messages.required);
const phone = yup
  .number()
  .integer()
  .positive()
  .max(9999999999999)
  .required(messages.required);
const gender = yup.string().required(messages.selectOne);
const classYear = yup.string().required(messages.selectOne);
const nim = yup.number().integer().positive().required(messages.required);
const password = yup
  .string()
  .required(messages.required)
  .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,13}$/, messages.password);
const confirmPassword = yup
  .string()
  .required(messages.required)
  .equals([yup.ref("password"), null], messages.confirmPassword);

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
