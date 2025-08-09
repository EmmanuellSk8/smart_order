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
        dishStatus: "in-progress" as const,
        category: "Plato fuerte" as const,
      },
      {
        name: "Tiramisu",
        ingredients: ["Café", "Queso mascarpone", "Cacao"],
        dishStatus: "in-progress" as const,
        category: "Postres" as const,
      },
      {
        name: "Coca-Cola",
        ingredients: ["Refresco"],
        dishStatus: "in-progress" as const,
        category: "Bebida" as const,
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
      {
        name: "Agua Mineral",
        ingredients: ["Agua con gas"],
        dishStatus: "in-progress" as const,
        category: "Bebida" as const,
      },
      {
        name: "Brownie con Helado",
        ingredients: ["Chocolate", "Nueces", "Helado de vainilla"],
        dishStatus: "in-progress" as const,
        category: "Postres" as const,
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
      {
        name: "Gelato de Fresa",
        ingredients: ["Fresas", "Leche", "Azúcar"],
        dishStatus: "completed" as const,
        category: "Postres" as const,
      },
      {
        name: "Jugo de Naranja",
        ingredients: ["Naranjas frescas"],
        dishStatus: "completed" as const,
        category: "Bebida" as const,
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
  dishStatus: "in-progress" | "completed";
  category: "Plato fuerte" | "Postres" | "Bebida" | "Entrada";
}

interface KitchenContextType {
  selectedOrder: Order | null;
  setSelectedOrder: (order: Order | null) => void;

  // Estado de filtro
  searchFilter: string;
  setSearchFilter: (filter: string) => void;

  orders: {
    new: Order[];
    inProgress: Order[];
    completed: Order[];
  };

  updateOrderStatus: (orderId: string, newStatus: Order["status"]) => void;
  addOrder: (order: Order) => void;
}

const KitchenContext = createContext<KitchenContextType | undefined>(undefined);

const KitchenProvider = ({ children }: { children: ReactNode }) => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [searchFilter, setSearchFilter] = useState<string>("");
  
  const [newOrders, setNewOrders] = useState<Order[]>(
    mockedOrders.filter((order) => order.status === "new")
  );
  const [inProgressOrders, setInProgressOrders] = useState<Order[]>(
    mockedOrders.filter((order) => order.status === "in-progress")
  );
  const [completedOrders, setCompletedOrders] = useState<Order[]>(
    mockedOrders.filter((order) => order.status === "completed")
  );

  // Función para filtrar órdenes por mesa
  const filterOrdersByTable = (orders: Order[]): Order[] => {
    if (!searchFilter.trim()) return orders;
    return orders.filter(order => 
      order.table.toString().includes(searchFilter.trim())
    );
  };

  const updateOrderStatus = (orderId: string, newStatus: Order["status"]) => {
    const allOrders = [...newOrders, ...inProgressOrders, ...completedOrders];
    const orderToMove = allOrders.find((order) => order.id === orderId); // Encontrar la orden a actualizar

    if (!orderToMove) return;

    const updatedOrder = { ...orderToMove, status: newStatus }; // Actualizar el estado de la orden

    // Actualizar las listas de órdenes
    setNewOrders((prev) => prev.filter((order) => order.id !== orderId));
    setInProgressOrders((prev) => prev.filter((order) => order.id !== orderId));
    setCompletedOrders((prev) => prev.filter((order) => order.id !== orderId));

    // Añadir la orden actualizada a la lista correspondiente según el nuevo estado
    switch (newStatus) {
      case "new":
        setNewOrders((prev) => [...prev, updatedOrder]);
        break;
      case "in-progress":
        setInProgressOrders((prev) => [...prev, updatedOrder]);
        break;
      case "completed":
        setCompletedOrders((prev) => [...prev, updatedOrder]);
        break;
    }

    if(selectedOrder?.id === orderId) { // Si la orden seleccionada es la que se actualizó, actualizar el estado
      setSelectedOrder(updatedOrder);
    }
  };

  const addOrder = (order: Order) => {
    setNewOrders((prev) => [...prev, order]);
  };

  const value = {
    selectedOrder,
    setSelectedOrder,
    searchFilter,
    setSearchFilter,
    orders: {
      new: filterOrdersByTable(newOrders),
      inProgress: filterOrdersByTable(inProgressOrders),
      completed: filterOrdersByTable(completedOrders),
    },
    updateOrderStatus,
    addOrder,
  };

  return (
    <KitchenContext.Provider value={value}>{children}</KitchenContext.Provider>
  );
};

export { KitchenProvider, KitchenContext };
