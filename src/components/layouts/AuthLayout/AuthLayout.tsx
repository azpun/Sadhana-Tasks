interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-slate-200 dark:bg-slate-800 flex flex-col justify-center items-center p-4">
      {children}
    </div>
  );
};
