import { CircleCheck, ClockFading, Users } from "lucide-react";
import type { GeneralProps } from "../../interfaces/Props.interfaces"

type Props = {
  numeroMesa: number;
  onIrResumen: () => void;
  onGoAddDishes: () => void;
}

function CardTable({ className = "",  ...props }: GeneralProps) {
  return (
    <div className={`p-3 shadow-xl w-80 border-1 rounded-lg border-gray-400 ${className}`}>
      {props.children}
    </div>
  );
}

function CardTableTitle({ className = "", ...props }: GeneralProps) {
  return (
    <h3 className={"mb-3" + className}>

      <div className="flex items-center gap-2.5">
        <Users />
        <p className="text-2xl font-semibold">{props.children}</p>
      </div>
    </h3>
  );
}

function TableState({ tableState, className }: GeneralProps) {
  return (
    <p className={"flex justify-between w-full items-center" + className}>
      <span className="font-semibold text-lg">Estado: </span>{tableState === "disponible" ? <span className="bg-green-200/90 flex items-center px-3 rounded-2xl text-green-800 font-bold text-sm">Disponible</span> : <span className="bg-blue-200/90 flex items-center px-3 rounded-2xl text-blue-800 font-bold text-sm">Ocupada</span>}
    </p>
  );
}

function ButtonTableBusy({ className, order, onIrResumen, onGoAddDishes}: GeneralProps & Props) {
  return (
    <>
      <p className="font-semibold text-lg mt-3 flex w-full justify-between">Pedidos: {order?.status === "listo" ? <span className="flex items-center gap-2 text-[#22C55E] font-semibold text-lg"><CircleCheck className="size-[20px]" /> Pedido listo</span> : <span className="flex items-center gap-2 text-[#F9802C] font-semibold text-[17px]"><ClockFading className="size-[18px] mt-0.5" /> Preparando</span>}</p>

      <div className="flex flex-col gap-2 mt-3">

        <button 
        onClick={onIrResumen}
        className={`border-gray-600 border-1 py-2 px-3 rounded-lg w-full cursor-pointer ${className}`}
        >Ver pedidos</button>
        <button
        onClick={onGoAddDishes}
        className={`bg-gray-200 py-2 px-3 rounded-lg w-full cursor-pointer ${className}`}>Agregar más platillos</button>
      </div>
    </>
  )
}

export { CardTable, CardTableTitle, TableState, ButtonTableBusy };