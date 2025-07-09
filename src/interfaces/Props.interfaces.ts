import type { Dispatch, SetStateAction } from "react";
import type { Order } from "./Order.interfaces";

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
    numeroMesa?: number;
    onVolver?: () => void;
    notes?: string;
    setNotes?: Dispatch<SetStateAction<string>>;
}

export type HeaderProps = {
    onHeader: () => void;
    onTables: () => void;
    vistaActual: "mesas" | "cocina" | "dishes" | "resumen";
  setVistaActual: (vista: "mesas" | "cocina" | "dishes" | "resumen") => void;
}

export type SearchEngineProps = {
  searchText: string;
  setSearchText: (value: string) => void;
  filterCategory: string;
  setFilterCategory: (value: string) => void;
}

export type TableProps = {
  numeroMesa: number;
  onIrResumen: () => void;
  onGoAddDishes: () => void;
}