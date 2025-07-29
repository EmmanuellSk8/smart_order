import { useState } from "react";
import KitchenContainer from "./KitchenContainer";
import KitchenHeader from "./KitchenHeader";
import KitchenSideBar from "./orders/kitchen-side-bar/KitchenSideBar";
import KitchenTabs from "./KitchenTabs";
import { type TabKey } from "./KitchenTabs";
import { useKitchenContext } from "./hooks/useKitchenContext";

export default function OrderPanelApp() {
  const [currentTab, setCurrentTab] = useState<TabKey>("orders");
  const { selectedOrder } = useKitchenContext();
  console.log("Selected Order:", selectedOrder);

  return (
    <main className="min-h-screen bg-gray-50">
        <KitchenHeader />
        <KitchenContainer>
          <KitchenTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          {currentTab === "orders" ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 min-h-full">
              <div className="col-span-1 h-full">
                <KitchenSideBar />
              </div>
              <div className="col-span-1 md:col-span-3">
                {selectedOrder ? (
                  <div className="p-4 bg-white rounded-xl shadow">
                    <h2 className="text-lg font-bold mb-2">
                      Detalles del Pedido #{selectedOrder.id}
                    </h2>
                    <p className="text-sm text-gray-600">
                      Mesa: {selectedOrder.table}
                    </p>
                    <p className="text-sm text-gray-600">
                      Cantidad de platillos: {selectedOrder.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Hora: {selectedOrder.time}
                    </p>
                  </div>
                ) : (
                  <p className="text-center text-gray-500">
                    Seleccione un pedido
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="p-4 min-h-full">
              {currentTab === "categories" && (
                <p>Contenido de Por Categorias</p>
              )}
              {currentTab === "analytics" && <p>Contenido de Analytics</p>}
            </div>
          )}
        </KitchenContainer>
    </main>
  );
}
