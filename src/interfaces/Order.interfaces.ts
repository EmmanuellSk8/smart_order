export type Order = {
  id: string;
  name: string;
  note?: string;
  quantity: number;
  image: string;
  category: string;
  time: string;
  status: "ready" | "cooking";
  table: number
};

export type OrderContextType = {
  orders: Order[];
  addOrder: (order: Order) => void;
  clearOrdersByTable: (table: number) => void;
  markAsServed: (id: string | undefined) => void;
}

export type OrdersOverViewProps = {
  ready: number;
  cooking: number;
};

export type ViewOrdersProps = {
    tableNumber: number;
    OnBack: () => void;
    onGoAddDishes: () => void;
}