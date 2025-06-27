import type { Dispatch, SetStateAction } from "react";
import type { Order } from "./Order.interfaces";

export type GeneralProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  title?: string;
  tableState?: "disponible" | "ocupada";
  image?: string
  order?: Order
  icon?: React.ReactNode
  color?: string
  bgColor?: string
  orders?: Order[]
  quantity?: number
  setQuantity?: Dispatch<SetStateAction<number>>;
}
