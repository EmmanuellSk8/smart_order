import WaitStaffPanel from "../../pages/WaitStaffPanel";
import { OrderProvider } from "./OrderContext";

function App() {
  return (
    <OrderProvider>
      <WaitStaffPanel />
    </OrderProvider>
  );
}

export default App;