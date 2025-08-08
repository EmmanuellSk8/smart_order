import { useKitchenContext } from "../../hooks/useKitchenContext";
import DishCard from "./DishCard";

export default function NewOrderDetails() {
  const { selectedOrder, updateOrderStatus } = useKitchenContext();

  const handleStartCooking = () => {
    if(selectedOrder) {
      updateOrderStatus(selectedOrder.id, "in-progress")
    }
  }

  return (
    <div>
      {selectedOrder && selectedOrder.status === "new" && (
        <div className="flex flex-col gap-2.5">
          {selectedOrder.items.map((item, index) => (
            <DishCard key={index} item={item} index={index} variant="new" />
          ))}
          <button 
          onClick={handleStartCooking}
          className="mt-4 bg-blue-500 text-white px-4 py-4 rounded-lg hover:bg-blue-600 cursor-pointer">
            <span className="text-xl text-white">Iniciar preparación</span>
          </button>
        </div>
      )}
    </div>
  );
}
