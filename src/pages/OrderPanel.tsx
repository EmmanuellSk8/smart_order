import OrderPanelApp from "../components/kitchen/OrderPanelApp";
import { KitchenProvider } from "../components/context/KitchenContext";

export default function OrderPanel() {
  return (
    <KitchenProvider>
      <OrderPanelApp />;
    </KitchenProvider>
  );
}
