import Header from "../components/waitstaff/Header";
import Activator from "../components/waitstaff/Activator";
import { useState } from "react";
import MaxContainerDishes from "../components/waitstaff/MaxContainerDishes";
import MaxContainerTables from "../components/waitstaff/MaxContainerTables";
import MaxContainerViewOrders from "../components/waitstaff/MaxContainerViewOrders";
import { NotificationPanel } from "../components/waitstaff/Notifications";
import { MaxContainerKitchen } from "../components/waitstaff/MaxContainerKitchen";

export default function WaitStaffPanel() {
  const mesas = Array.from({ length: 16 }, (_, i) => i + 1);
  const [vistaActual, setVistaActual] = useState<"mesas" | "dishes" | "resumen" | "cocina">("mesas");
  const [mesaSeleccionada, setMesaSeleccionada] = useState<number>(1);

  return (
    <>
      <div className="flex h-screen max-w-[1950px]">

        <NotificationPanel />
        <Activator />

        <div className="flex flex-col flex-1">

          <Header
            onTables={() => { setVistaActual("mesas") }}
            onHeader={() => { setVistaActual("cocina") }}
            setVistaActual={setVistaActual}
            vistaActual={vistaActual}
          />

          <main className="flex-1 overflow-auto p-4 max-w-[1600px]">

            {vistaActual === "mesas" && (
              <MaxContainerTables
                mesas={mesas}
                onIrResumen={(mesa) => {
                  setMesaSeleccionada(mesa)
                  setVistaActual("resumen")
                }}
                onGoAddDishes={(mesa) => {
                  setMesaSeleccionada(mesa)
                  setVistaActual("dishes")
                }}
                onSeleccionar={(mesa) => {
                  setMesaSeleccionada(mesa);
                  setVistaActual("dishes");
                }}
              />
            )}

            {vistaActual === "dishes" && mesaSeleccionada !== null && (
              <MaxContainerDishes
                numeroMesa={mesaSeleccionada}
                onVolver={() => setVistaActual("mesas")}
              />
            )}

            {vistaActual === "resumen" && mesaSeleccionada !== null && (
              <MaxContainerViewOrders
                numeroMesa={mesaSeleccionada}
                onVolver={() => setVistaActual("mesas")}
                onGoAddDishes={() => setVistaActual("dishes")}
              />
            )}

            {vistaActual === "cocina" &&

              <MaxContainerKitchen onVolver={() => { setVistaActual("mesas") }} />
            }

          </main>
        </div>
      </div>
    </>
  );
}