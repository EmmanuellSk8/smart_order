export type Order = {
  id: string;
  name: string;
  note?: string;
  quantity: number;
  image: string;
  category: string;
  time: string;
  status: "listo" | "preparando";
  mesa: number
};

export type OrderContextType = {
  orders: Order[];
  addOrder: (order: Order) => void;
  clearOrdersByTable: (mesa: number) => void;
  markAsServed: (id: string | undefined) => void;
}

export type OrdersOverViewProps = {
  ready: number;
  cooking: number;
};

export type ViewOrdersProps = {
    numeroMesa: number;
    onVolver: () => void;
    onGoAddDishes: () => void;
}