import { useContext } from "react";
import { KitchenContext } from "../../context/KitchenContext"

const useKitchenContext = () => {
  const context = useContext(KitchenContext);
  if (!context) {
    throw new Error(
      "useKitchenContext must be used within a KitchenOrderProvider"
    );
  }
  return context;
};

export { useKitchenContext };
