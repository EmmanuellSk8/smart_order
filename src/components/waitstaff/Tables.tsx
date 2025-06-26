import { CircleCheck, ClockFading, Users } from "lucide-react";
import React from "react";

export type CardsProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  title?: string;
  tableState?: "disponible" | "ocupada";
  orders?: "listo" | "preparando";
  image?: string
}

function CardTable({ className = "", ...props }: CardsProps) {
  return (
    <div className={`p-3 shadow-xl w-80 border-1 rounded-lg border-gray-400 ${className}`}>
      {props.children}
    </div>
  );
}

function CardTableTitle({ className = "", ...props }: CardsProps) {
  return (
    <h3 className={"mb-3" + className}>

      <div className="flex items-center gap-2.5">
        <Users />
        <p className="text-2xl font-semibold">{props.children}</p>
      </div>
    </h3>
  );
}

function TableState({ tableState, className }: CardsProps) {
  return (
    <p className={"flex justify-between w-full items-center" + className}>
      <span className="font-semibold text-lg">Mesa: </span>{tableState === "disponible" ? <p className="bg-green-200/90 flex items-center px-3 rounded-2xl text-green-800 font-bold text-sm">Disponible</p> : <p className="bg-blue-200/90 flex items-center px-3 rounded-2xl text-blue-800 font-bold text-sm">Ocupada</p>}
    </p>
  );
}

function ButtonTableAvaible({ className }: CardsProps) {
  return (
    <button className={"bg-black text-white py-2.5 px-3 rounded-lg mt-8 w-full" + className}><span className="font-semibold">Iniciar pedido</span></button>
  )
}

function ButtonTableBusy({ className, orders }: CardsProps) {
  return (
    <>
        <p className="font-semibold text-lg mt-3 flex w-full justify-between">Pedidos: {orders === "listo" ? <p className="flex items-center gap-2 text-[#22C55E] font-semibold text-lg"><CircleCheck className="size-[20px]"/> Pedido listo</p> : <p className="flex items-center gap-2 text-[#F9802C] font-semibold text-[17px]"><ClockFading className="size-[18px] mt-0.5"/> Preparando</p>}</p>

        <div className="flex flex-col gap-2 mt-3">
          <button className={"border-gray-600 border-1 py-2 px-3 rounded-lg w-full font-semibold" + className}>Ver pedidos</button>
          <button className={"bg-gray-200 py-2 px-3 rounded-lg w-full font-semibold" + className}>Agregar más platillos</button>
        </div>
    
    </>
  )
}

export { CardTable, CardTableTitle, TableState, ButtonTableAvaible, ButtonTableBusy };