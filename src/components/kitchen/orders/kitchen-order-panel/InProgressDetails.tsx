import { CircleCheckBig } from "lucide-react"; // InProgressOrderDetails.tsx
import { useEffect, useState } from "react";
import { useKitchenContext } from "../../hooks/useKitchenContext";
import DishCard from "./DishCard";

export default function InProgressOrderDetails() {
  const { selectedOrder, updateOrderStatus } = useKitchenContext();

  // Estado para rastrear qué dishes han sido marcados como completados
  const [completedDishes, setCompletedDishes] = useState<Set<number>>(
    new Set()
  );

  const handleToggleDishCompleted = (dishIndex: number) => {
    setCompletedDishes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(dishIndex)) {
        newSet.delete(dishIndex); // Desmarcar si ya estaba marcado
      } else {
        newSet.add(dishIndex); // Marcar si no estaba marcado
      }
      return newSet;
    });
  };

  // Verificar si todos los dishes han sido marcados
  const areAllDishesMarkedCompleted = (): boolean => {
    if (!selectedOrder) return false;
    return completedDishes.size === selectedOrder.items.length;
  };

  const handleMarkAllDishes = () => {
    if (!selectedOrder) return;
    // Marcar todos los dishes como completados
    const allIndices = selectedOrder.items.map((_, index) => index);
    setCompletedDishes(new Set(allIndices));
  };

  const handleCompleteOrder = () => {
    if (selectedOrder && areAllDishesMarkedCompleted()) {
      updateOrderStatus(selectedOrder.id, "completed");
      // Resetear el estado local
      setCompletedDishes(new Set());
    }
  };

  // Resetear cuando cambie la orden seleccionada
  useEffect(() => {
    setCompletedDishes(new Set());
  }, [selectedOrder?.id]);

  return (
    <div>
      {selectedOrder && selectedOrder.status === "in-progress" && (
        <div className="flex flex-col gap-2.5">
          {selectedOrder.items.map((item, index) => (
            <DishCard
              key={index}
              item={item}
              index={index}
              variant="in-progress"
              isCompleted={completedDishes.has(index)}
              onMarkComplete={() => handleToggleDishCompleted(index)}
            />
          ))}

          {/* Botón dinámico según el estado */}
          {areAllDishesMarkedCompleted() ? (
            // Botón para completar toda la orden
              <button
                onClick={handleCompleteOrder}
                className="mt-4 px-4 py-4 rounded-lg text-xl font-semibold bg-green-500 text-white hover:bg-green-600 cursor-pointer transition-colors flex gap-2 items-center justify-center"
              >
                <CircleCheckBig className="w-6 h-6" />
                <p>Enviar pedido completado</p>
              </button>
          ) : (
            // Botón para marcar todos los dishes
            <button
              onClick={handleMarkAllDishes}
              className="mt-4 px-4 py-4 rounded-lg text-xl font-semibold bg-blue-500 text-white hover:bg-blue-600 cursor-pointer transition-colors"
            >
              Marcar todos los platillos ({completedDishes.size}/
              {selectedOrder.items.length})
            </button>
          )}
        </div>
      )}
    </div>
  );
}
