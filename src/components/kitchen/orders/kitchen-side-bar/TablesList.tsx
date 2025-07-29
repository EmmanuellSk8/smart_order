import {
  CircleAlert,
  ChefHatIcon,
  CircleCheck,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

type TablesListProps = {
  children: React.ReactNode;
  title: string;
  count: number;
  status: "new" | "in-progress" | "completed";
};

const getStatusStyles = (status: string) => {
  switch (status) {
    case "new":
      return {
        color: "#DE8D2F",
        bgColor: "#FEF3C7",
        icon: CircleAlert,
      };
    case "in-progress":
      return {
        color: "#2563EB",
        bgColor: "#DBEAFE",
        icon: ChefHatIcon,
      };
    case "completed":
      return {
        color: "#10B981",
        bgColor: "#D1FAE5",
        icon: CircleCheck,
      };
    default:
      return {
        color: "#9CA3AF",
        bgColor: "#F3F4F6",
        icon: CircleAlert,
      };
  }
};

export default function TablesList({
  children,
  title,
  count,
  status,
}: TablesListProps) {
  const [isOpen, setIsOpen] = useState(true);
  const styles = getStatusStyles(status);

  return (
    <div className="flex flex-col w-full h-full">
      <div
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2"
      >
        <styles.icon
          className="w-6 h-6 font-bold"
          style={{ color: styles.color }}
        />
        <h3 className="text-lg font-semibold">{title}</h3>
        <span
          style={{ backgroundColor: styles.bgColor, color: styles.color }}
          className="rounded-full px-2 min-w-[1.5rem] text-center text-sm font-bold"
        >
          {count}
        </span>
        {count > 0 && (
          <span
            className="ml-auto transition-transform"
            style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            <ArrowRight className="w-4 h-4" />
          </span>
        )}
      </div>
      {isOpen && count > 0 && (
        <div className="flex flex-col gap-2 mt-2">{children}</div>
      )}
    </div>
  );
}
