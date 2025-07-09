import WaitStaffApp from '../components/waitstaff/WaitStaffApp';
import { OrderProvider } from "../components/context/OrderContext";

function WaitStaffPanel() {
  return (
    <OrderProvider>
      <WaitStaffApp />
    </OrderProvider>
  );
}

export default WaitStaffPanel;