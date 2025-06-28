import  { createContext, useContext, useState} from "react";
import type { ReactNode } from "react";
import type { OrderContextType, Order } from "../../interfaces/Order.interfaces";

const OrderContext = createContext<OrderContextType | undefined>(undefined);
 
 const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  // const addOrder = (order: Order) => {
  const addOrder = (order: Order) => {
  console.log("📦 addOrder llamado:", order);
  setOrders(prev => {
    const updated = [...prev, order];
    console.log("🧾 Órdenes actuales:", updated);
    return updated;
  });
};

  //   console.log("📦 addOrder llamado:", order); 
  //   // 👈 AÑADE ESTO
  //   setOrders(prev => [...prev, order]);
  // };

  console.log("📋 Render del OrderProvider con órdenes:", orders); // 👈 Y ESTO
console.log("🧠 Contexto cargado desde:", import.meta.url);

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

// const OrderProvider = ({children}: {children: ReactNode}) => {
// const [orders, setOrders] = useState<Order[]>([])

// const addOrder = (order: Order) => {
//     setOrders(prev => [...prev, order])
// }

// return(
//     <OrderContext.Provider value={{orders, addOrder}}>
//         {children}
//     </OrderContext.Provider>
// )
// }

const UseOrders = () => {
    const context = useContext(OrderContext);
    if(!context) throw new Error("useOrders must be used within OrderProvider")
        return context;
}


export {OrderProvider, UseOrders}