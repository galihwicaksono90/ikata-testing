import { UseFormSetError, UseFormSetFocus } from "react-hook-form";
import { UserInputTypeLogi, UserInputForgotPassword } from "generated/graphql";
import { RegisterFormProps, ResetPasswordFormProps } from "components/form";

interface ValidationProps<T> {
  (
    values: T,
    setError: UseFormSetError<T>,
    setFocus?: UseFormSetFocus<T>
  ): boolean;
}

const numberRegex = /^\d+$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,13}$/;
// const phoneRegex = /^\s*((?!0))(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
const phoneRegex = /^((?!(0))[0-9]{5,13})$/;

export const errorMessage = {
  required: "Wajib diisi",
  selectOne: "Pilih salah satu",
  email: "Format email, cth: ikata@zzz.com",
  password:
    "Password harus berisi maksimal 13 karakter, minimal 6 karakter, satu huruf kapital, satu huruf kecil, dan satu angka",
  confirmPassword: "Kombinasi password tidak sesuai.",
  number: "Wajib menggunakan angka",
  phoneNumber: "Format nomer telepon, cth: 628xxxxxxxxxx",
};

export const validateLoginForm: ValidationProps<UserInputTypeLogi> = (
  values,
  setError
) => {
  if (!values.email.match(emailRegex)) {
    setError("email", { message: errorMessage.email }, { shouldFocus: true });
    return false;
  }

  return true;
};

export const validateRegisterForm: ValidationProps<RegisterFormProps> = (
  values,
  setError,
  setFocus
) => {
  let errors = [];
  if (!values.email.match(emailRegex)) {
    setError("email", { message: errorMessage.email });
    errors.push("email");
  }
  if (!values.nim.toString().match(numberRegex)) {
    setError("nim", { message: errorMessage.number });
    errors.push("nim");
  }
  if (!values.phone.match(phoneRegex)) {
    setError("phone", { message: errorMessage.phoneNumber });
    errors.push("phone");
  }
  if (!values.phone.match(numberRegex)) {
    setError("phone", { message: errorMessage.number });
    errors.push("phone");
  }
  if (!values.password.match(passwordRegex)) {
    setError("password", { message: errorMessage.password });
    errors.push("password");
  }
  if (values.password !== values.confirmPassword) {
    setError("confirmPassword", { message: errorMessage.confirmPassword });
    errors.push("confirmPassword");
  }

  // set focus to the first error field
  if (errors.length > 0) {
    setFocus(errors[0]);
    return false;
  }

  return true;
};

export const validateForgotPasswordForm: ValidationProps<
  UserInputForgotPassword
> = (values, setError, setFocus) => {
  if (!values.email.match(emailRegex)) {
    setError("email", { message: errorMessage.email });
    setFocus("email");
    return false;
  }
  return true;
};

export const validateResetPasswordForm: ValidationProps<
  ResetPasswordFormProps
> = (values, setError, setFocus) => {
  let errors = [];
  if (!values.password.match(passwordRegex)) {
    setError("password", { message: errorMessage.password });
    errors.push("password");
  }
  if (values.password !== values.confirmPassword) {
    setError("confirmPassword", { message: errorMessage.confirmPassword });
    errors.push("confirmPassword");
  }
  if (errors.length > 0) {
    setFocus(errors[0]);
    return false;
  }
  return true;
};
