import MyForm from "../../components/common/Form";
import AuthLayout from "../../components/layouts/AuthLayout";
import Card from "../../components/ui/Card";

export const RegisterPage = () => {
  return (
    <AuthLayout>
      <Card>
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Create Account
          </h1>
          <h3 className="text-base text-slate-500 dark:text-slate-400">
            Please fill in the form below to create an account
          </h3>
          <div>
            <MyForm />
          </div>
        </div>
      </Card>
    </AuthLayout>
  );
};
