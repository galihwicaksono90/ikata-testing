import { LoginLayout } from "components/layouts";
import { RegisterForm } from "components/form";

const register = () => {
  return (
    <LoginLayout containerSize={600} headerTitle="Daftar Baru">
      <RegisterForm />
    </LoginLayout>
  );
};

export default register;
