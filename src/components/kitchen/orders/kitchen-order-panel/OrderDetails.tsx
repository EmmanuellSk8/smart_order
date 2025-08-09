import { useKitchenContext } from "../../hooks/useKitchenContext";
import CompletedOrders from "./CompletedOrders";
import InProgressOrderDetails from "./InProgressDetails";
import NewOrderDetails from "./NewOrderDetails";

export default function OrderDetails() {
  const { selectedOrder } = useKitchenContext();

  return (
    <div>
      {selectedOrder?.status === "new" && <NewOrderDetails />}
      {selectedOrder?.status === "in-progress" && <InProgressOrderDetails />}
      {selectedOrder?.status === "completed" && <CompletedOrders />}
    </div>
  );
}
