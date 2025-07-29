import { useKitchenContext } from "../../hooks/useKitchenContext";
import NewOrderDetails from "./NewOrderDetails";

export default function OrderDetails() {
  const { selectedOrder } = useKitchenContext();

  return (
    <div className="p-6">
      {selectedOrder?.status === "new" && <NewOrderDetails />}
      {selectedOrder?.status === "in-progress" && <h2>Pedidos en proceso</h2>}
      {selectedOrder?.status === "completed" && <h2>Pedidos completados</h2>}
    </div>
  );
}
