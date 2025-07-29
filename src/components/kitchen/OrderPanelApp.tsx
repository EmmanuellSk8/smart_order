import { useState } from "react";
import KitchenContainer from "./KitchenContainer";
import KitchenHeader from "./KitchenHeader";
import KitchenSideBar from "./orders/kitchen-side-bar/KitchenSideBar";
import KitchenTabs from "./KitchenTabs";
import { type TabKey } from "./KitchenTabs";

export default function OrderPanelApp() {
  const [currentTab, setCurrentTab] = useState<TabKey>("orders");

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
              <p>Contenido principal de la cocina</p>
            </div>
          </div>
        ) : (
          <div className="p-4 min-h-full">
            {currentTab === "categories" && <p>Contenido de Por Estaciones</p>}
            {currentTab === "analytics" && <p>Contenido de Analytics</p>}
          </div>
        )}
      </KitchenContainer>
    </main>
  );
}
