import { useKitchenContext } from "../../hooks/useKitchenContext";
import { HandPlatter  } from 'lucide-react';

export default function OrderHeader() {
  const { selectedOrder } = useKitchenContext();
  const getStatusText = (status: string | undefined) => {
    switch (status) {
      case "new":
        return "Nuevo";
      case "in-progress":
        return "En Proceso";
      case "completed":
        return "Completado";
      default:
        return "Desconocido";
    }
  };

  return (
    <header className="flex items-center justify-between w-full p-4">
      <div className="flex items-center gap-4">
        <HandPlatter className="text-yellow-600 w-6 h-6" />
        <h1 className="text-3xl font-bold">Mesa {selectedOrder?.table}</h1>
        <span className="rounded-4xl px-2 py-0.5 border-1 border-gray-300 text-xs font-semibold">
          {getStatusText(selectedOrder?.status)}
        </span>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-sm text-gray-500">Pedido #{selectedOrder?.id}</p>
        <p className="text-sm text-gray-500">
          {selectedOrder?.time || "Hora no disponible"}
        </p>
      </div>
    </header>
  );
}
