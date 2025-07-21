import Header from "./Header";
import Activator from "./Activator";
import { useState } from "react";
import MaxContainerDishes from "./containers/MaxContainerDishes";
import MaxContainerTables from "./containers/MaxContainerTables";
import MaxContainerViewOrders from "./containers/MaxContainerViewOrders";
import { NotificationPanel } from "./Notifications";
import { MaxContainerKitchen } from "./containers/MaxContainerKitchen";

export default function WaitStaffApp() {
  const tables = Array.from({ length: 16 }, (_, i) => i + 1);
  const [currentView, setCurrentView] = useState<"tables" | "dishes" | "resumen" | "cocina">("tables");
  const [selectTable, setSelectTable] = useState<number>(1);

  return (
    <>
      <div className="flex h-screen max-w-[1950px]">

        <NotificationPanel />
        <Activator />

        <div className="flex flex-col flex-1">

          <Header
            onTables={() => { setCurrentView("tables") }}
            onHeader={() => { setCurrentView("cocina") }}
            setCurrentView={setCurrentView}
            currentView={currentView}
          />

          <main className="flex-1 overflow-auto p-4 max-w-[1600px]">

            {currentView === "tables" && (
              <MaxContainerTables
                tables={tables}
                onGoResumen={(table) => {
                  setSelectTable(table)
                  setCurrentView("resumen")
                }}
                onGoAddDishes={(table) => {
                  setSelectTable(table)
                  setCurrentView("dishes")
                }}
                onSelect={(table) => {
                  setSelectTable(table);
                  setCurrentView("dishes");
                }}
              />
            )}

            {currentView === "dishes" && selectTable !== null && (
              <MaxContainerDishes
                tableNumber={selectTable}
                OnBack={() => setCurrentView("tables")}
              />
            )}

            {currentView === "resumen" && selectTable !== null && (
              <MaxContainerViewOrders
                tableNumber={selectTable}
                OnBack={() => setCurrentView("tables")}
                onGoAddDishes={() => setCurrentView("dishes")}
              />
            )}

            {currentView === "cocina" &&

              <MaxContainerKitchen OnBack={() => { setCurrentView("tables") }} />
            }

          </main>
        </div>
      </div>
    </>
  );
}