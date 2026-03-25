import { bgPriorityColor } from "../../../constants/colorMapping";

interface PriorityProps {
  priority: "low" | "medium" | "high";
}
export const PriorityTask = ({ priority }: PriorityProps) => {
  return (
    <span
      className={`p-2 rounded-full ${bgPriorityColor[priority]} capitalize`}
    >
      {priority}
    </span>
  );
};
