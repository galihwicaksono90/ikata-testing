import { LoginLayout } from "components/layouts";
import { RegisterForm } from "components/form";

const register = () => {
  return (
    <LoginLayout containerSize={632} headerTitle="Daftar Baru">
      <RegisterForm />
    </LoginLayout>
  );
};

export default register;
