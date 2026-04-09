import { bgStatusColor } from "../../../constants/colorMapping";

interface StatusProps {
  status: "to do" | "in progress" | "done" | "overdue";
}

export const StatusTask = ({ status }: StatusProps) => {
  return (
    <span
      className={`p-2 rounded-full ${bgStatusColor[status]} capitalize dark:text-slate-900`}
    >
      {status}
    </span>
  );
};
