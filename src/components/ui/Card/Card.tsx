interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-slate-800/50 p-8 md:p-10 max-w-md w-full border border-slate-100 dark:border-slate-700">
      {children}
    </div>
  );
};
