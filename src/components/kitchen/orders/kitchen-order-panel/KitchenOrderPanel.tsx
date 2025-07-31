import { type ReactNode } from "react";
import OrderHeader from "./OrderHeader";

interface KitchenOrderPanelProps {
  children: ReactNode;
}

export default function KitchenOrderPanel({
  children,
}: KitchenOrderPanelProps) {
  //   const currentOrderStatus = selectedOrder?.status;
  return (
    <div className="col-span-1 md:col-span-3">
      <OrderHeader />
      <div className="p-6">{children}</div>
    </div>
  );
}
