import { useState } from "react";
import { Bell } from 'lucide-react';

type Notification = {
  id: number;
  msg: string;
};

declare global {
  interface Window {
    addNotificationChef?: (msg: string) => void;
    addNotificationTable?: (msg: string) => void;
  }
}

 function NotificationPanel() {
  const [chef, setChef] = useState<Notification[]>([]);
  const [table, setTable] = useState<Notification[]>([]);

  const addNotificationChef = (msg: string) => {
    const id = Date.now();
    setChef((prev) => [...prev, { id, msg }]);
  };

  if (typeof window !== "undefined") {
    window.addNotificationChef = addNotificationChef;
  }

  const removeNotificationChef = (id: number) => {
    setChef((prev) => prev.filter((n) => n.id !== id));
  };

  const addNotificationTable = (msg: string) => {
    const id = Date.now();
    setTable((prev) => [...prev, { id, msg }]);
  };

  if (typeof window !== "undefined") {
    window.addNotificationTable = addNotificationTable;
  }

  const removeNotificationTable = (id: number) => {
    setTable((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <aside className="w-72 min-h-screen border-r-1 border-gray-300 top-0 bg-white">
      <div className="flex gap-3 items-center mx-4 my-4">
        <Bell size={20} />
        <h2 className="text-lg font-semibold">Notificaciones</h2>
      </div>
      <div className="border-b-1 border-gray-300 mt-4" />
      <ThereArentNotifications/>

      <div className="px-3 py-4">

        {chef.map((n) => (
          <div
            key={n.id}
            className="bg-green-200/70 shadow p-2 rounded mb-2 border text-sm flex flex-nowrap items-center font-semibold gap-2 cursor-pointer"
            onClick={() => removeNotificationChef(n.id)}
          >
            <p className="gap-4 flex items-center">{n.msg} <span className="bg-green-300/90 py-1 px-2.5 rounded-2xl text-nowrap h-fit">Mesa 1</span></p>
          </div>
        ))}

        {table.map((n) => (
          <div
            key={n.id}
            className="bg-blue-200/70 shadow p-2 rounded mb-2 border text-sm flex flex-nowrap items-center gap-2 cursor-pointer font-semibold relative "
            onClick={() => removeNotificationTable(n.id)}
          >
            <p className="gap-4 flex items-center">{n.msg} <span className="bg-blue-300/90 py-1 px-2.5 rounded-2xl text-nowrap h-fit">Mesa 1</span></p>
          </div>
        ))}
      </div>
    </aside>
  );
}

function ThereArentNotifications(){
return(
  <div className="flex flex-col gap-2.5 w-full items-center justify-center mt-10 text-gray-600">
  <Bell className="size-9"/>
  <span>No hay Notificaciones</span>
  </div>
)
}

export {ThereArentNotifications, NotificationPanel}