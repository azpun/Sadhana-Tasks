interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-10 max-w-md w-full border border-slate-100">
      {children}
    </div>
  );
};
