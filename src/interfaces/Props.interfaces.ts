import type { Dispatch, SetStateAction } from "react";
import type { Order } from "./Order.interfaces";
import type { icons } from "lucide-react";

export type GeneralProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  title?: string;
  tableState?: "disponible" | "ocupada";
  image?: string
  order?: Order
  icon?: React.ReactNode
  iconColor?: string
  ColorNumberOrders?: string
  bgOrderCards?: string
  orders?: Order[]
  quantity?: number
  notes?: string;
  setQuantity?: Dispatch<SetStateAction<number>>;
  setNotes?: Dispatch<SetStateAction<string>>;
}

export type AddDishProps = {
    tableNumber?: number;
    OnBack?: () => void;
    notes?: string;
    setNotes?: Dispatch<SetStateAction<string>>;
}

export type HeaderProps = {
    onHeader: () => void;
    onTables: () => void;
    currentView: "tables" | "cocina" | "dishes" | "resumen";
    setCurrentView: (vista: "tables" | "cocina" | "dishes" | "resumen") => void;
}

export type SearchEngineProps = {
  searchText: string;
  setSearchText: (value: string) => void;
  filterCategory: string;
  setFilterCategory: (value: string) => void;
}

export type TableProps = {
  tableNumber: number;
  onGoResumen: () => void;
  onGoAddDishes: () => void;
}

export type IconsProps = {
    name: keyof typeof icons;
    className?: string;
    size?: number;
    strokeWidth?: number;
};