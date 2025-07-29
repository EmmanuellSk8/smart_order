import { createContext, useState, type ReactNode } from "react";

const mockedOrders = [
  {
    id: "124",
    table: 1,
    quantity: 2,
    items: [
      {
        name: "Pizza Margherita",
        ingredients: ["Tomate", "Queso", "Albahaca"],
        dishStatus: "stand-by" as const,
        category: "Plato fuerte" as const,
      },
      // ...resto de items
    ],
    status: "new" as const,
    time: "12:30 PM",
  },
  {
    id: "125",
    table: 2,
    quantity: 1,
    items: [
      {
        name: "Ensalada César",
        ingredients: ["Lechuga", "Pollo", "Queso parmesano"],
        dishStatus: "in-progress" as const,
        category: "Entrada" as const,
      },
    ],
    status: "in-progress" as const,
    time: "12:35 PM",
  },
  {
    id: "126",
    table: 3,
    quantity: 3,
    items: [
      {
        name: "Spaghetti Carbonara",
        ingredients: ["Espagueti", "Huevo", "Panceta"],
        dishStatus: "completed" as const,
        category: "Plato fuerte" as const,
      },
      // ...resto de items
    ],
    status: "completed" as const,
    time: "12:40 PM",
  },
];

interface Order {
  id: string;
  table: number;
  quantity: number;
  items: OrderDish[];
  status: "new" | "in-progress" | "completed";
  time: string;
}

interface OrderDish {
  name: string;
  ingredients: string[];
  dishStatus: "stand-by" | "in-progress" | "completed";
  category: "Plato fuerte" | "Postres" | "Bebida" | "Entrada";
}

interface KitchenContextType {
  selectedOrder: Order | null;
  setSelectedOrder: (order: Order | null) => void;

  orders: {
    new: Order[];
    inProgress: Order[];
    completed: Order[];
  };

  // updateOrderStatus: (orderId: string, newStatus: Order["status"]) => void;
  addOrder: (order: Order) => void;
}

const KitchenContext = createContext<KitchenContextType | undefined>(undefined);

const KitchenProvider = ({ children }: { children: ReactNode }) => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [newOrders, setNewOrders] = useState<Order[]>(
    mockedOrders.filter((order) => order.status === "new")
  );
  const [inProgressOrders, ] = useState<Order[]>(
    mockedOrders.filter((order) => order.status === "in-progress")
  );
  const [completedOrders, ] = useState<Order[]>(
    mockedOrders.filter((order) => order.status === "completed")
  );

  // const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
  //   //TODO: Update logic to change the status of an order
  // };

  const addOrder = (order: Order) => {
    setNewOrders((prev) => [...prev, order]);
  };

  const value = {
    selectedOrder,
    setSelectedOrder,
    orders: {
      new: newOrders,
      inProgress: inProgressOrders,
      completed: completedOrders,
    },
    // updateOrderStatus,
    addOrder,
  };

  return (
    <KitchenContext.Provider value={value}>{children}</KitchenContext.Provider>
  );
};

export { KitchenProvider, KitchenContext };
