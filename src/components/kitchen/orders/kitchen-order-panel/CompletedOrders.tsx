import { useKitchenContext } from "../../hooks/useKitchenContext";
import DishCard from "./DishCard";

function CompletedOrders() {
  const { selectedOrder } = useKitchenContext();
  return (
    <div>
      {selectedOrder?.status === "completed" && (
        <div className="flex flex-col gap-2.5">
            {selectedOrder.items.map((item, index) => (
                <DishCard 
                    key={index} 
                    item={item} 
                    index={index} 
                    variant="completed"
                />
            ))}
        </div>
      )}
    </div>
  );
}

export default CompletedOrders;
