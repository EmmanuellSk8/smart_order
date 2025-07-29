import { Users } from "lucide-react";
import { useState } from "react";

export interface TableCardProps {
  order: {
    id: string;
    table: number;
    quantity: number;
    items: OrderDish[];
    status: "new" | "in-progress" | "completed";
    time: string;
  };
  variant?: "new" | "in-progress" | "completed";
};

interface OrderDish {
  name: string;
  ingredients: string[];
  dishStatus: "stand-by" | "in-progress" | "completed";
  category: "Plato fuerte" | "Postres" | "Bebida" | "Entrada";
};

const getVariantStyles = (variant?: TableCardProps["variant"]) => {
  switch (variant) {
    case "new":
      return {
        borderColor: "#DE8D2F",
        textColor: "#DE8D2F",
      };
    case "in-progress":
      return {
        borderColor: "#2563EB",
        textColor: "#2563EB",
      };
    case "completed":
      return {
        borderColor: "#10B981",
        textColor: "#10B981",
      };
    default:
      return {
        borderColor: "#9CA3AF",
        textColor: "#9CA3AF",
      };
  }
};

export default function TableCard({ order, variant }: TableCardProps) {
  const [isSelected, setIsSelected] = useState(false);
  const styles = getVariantStyles(variant);

  return (
    <div
      tabIndex={0}
      role="button"
      onClick={() => setIsSelected(!isSelected)}
      className={`flex flex-col gap-2 rounded-xl p-4 cursor-pointer hover:bg-gray-50 ${
        isSelected ? "border-3" : "border-l-3"
      }`}
      style={{ borderColor: isSelected ? "#2563EB" : styles.borderColor }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 ">
          <Users style={{ color: styles.textColor }} />
          <h2 className="font-bold">Mesa {order.table}</h2>
        </div>
        <span className="text-sm text-gray-500">{order.time}</span>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-sm text-gray-500">
          {order.quantity} platillos
        </span>
        <span className="text-sm text-gray-500">#{order.id}</span>
      </div>
    </div>
  );
}
