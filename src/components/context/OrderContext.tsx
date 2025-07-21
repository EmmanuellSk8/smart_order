import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { OrderContextType, Order } from "../../interfaces/Order.interfaces";

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Order) => {
    console.log("📦 addOrder llamado:", order);
    setOrders(prev => {
      const updated = [...prev, order];
      console.log("🧾 Órdenes actuales:", updated);
      return updated;
    });
  };

  const clearOrdersByTable = (table: number) => {
    setOrders((prev) => prev.filter((order) => order.table !== table))
  };

  const markAsServed = (id: string | undefined) => {
  setOrders(prev => prev.filter(order => order.id !== id));
};

  return (
    <OrderContext.Provider value={{ orders, addOrder, clearOrdersByTable, markAsServed }}>
      {children}
    </OrderContext.Provider>
  );
};

const UseOrders = () => {
  const context = useContext(OrderContext);
  if (!context) throw new Error("useOrders must be used within OrderProvider")
  return context;
}

export { OrderProvider, UseOrders }