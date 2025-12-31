import { useEffect, useState } from "react";
import { Bell } from 'lucide-react';
import type { ToastNotifications, ToastNotificationsProps } from "../../interfaces/Notifications.interface";
import { io } from "socket.io-client";
import SoundNotification from "../SoundNotification";

function NotificationPanel() {

  const [notification, setNotification] = useState<ToastNotifications[]>([]);

  useEffect(() => {
    const socket = io("http://localhost:3000")

    socket.on("recieveNotification", (data) => {
      const id = Date.now();
      setNotification((prev) => [...prev, { id, ...data }]);
      console.log("Connected to socket server", data);
      SoundNotification()
    });
  }, []);
  
  const removeNotification = (id: number) => {
    setNotification((prev) => prev.filter((n) => n.id !== id));
  };

  const noNotificacions = notification.length === 0;

  return (
    <aside className="w-72 min-h-screen border-r-1 border-gray-300 top-0 bg-white">
      <div className="flex gap-3 items-center mx-4 my-4">
        <Bell size={20} />
        <h2 className="text-lg font-semibold">Notificaciones</h2>
      </div>

      <div className="border-b-1 border-gray-300 mt-4" />

      {noNotificacions && <ThereArentNotifications />}

      <ToastNotifications
        notifications={notification}
        removeNotification={removeNotification}
      />
    </aside>
  );
}

function ToastNotifications({ notifications, removeNotification }: ToastNotificationsProps) {
  return (
    <div className="px-3 py-4">
      {notifications.map((n) => (
        <div
          key={n.id}
          className={`shadow p-2 rounded mb-2 border text-sm flex flex-nowrap items-center font-semibold gap-2 cursor-pointer ${n.action === "call-waiter" ? "bg-gray-300/70" : n.action === "make-order" ? "bg-blue-200/70" : n.action === "order-ready" ? "bg-green-200/70" : ""}`}
          onClick={() => removeNotification(n.id)}
        >
          {n.action === "call-waiter" ? <p className="flex items-center justify-between w-full">Te solicitan en <span className="bg-white py-1 px-2.5 rounded-2xl text-nowrap h-fit">mesa {n.tableNumber}</span></p>
            : n.action === "make-order" ? <p className="flex items-center justify-between w-full">Listos para ordenar en <span className="bg-blue-300/90 py-1 px-2.5 rounded-2xl text-nowrap h-fit">mesa {n.tableNumber}</span></p>
              : n.action === "order-ready" ? <p className="flex items-center justify-between w-full">Pedido listo en <span className="bg-green-300/90 py-1 px-2.5 rounded-2xl text-nowrap h-fit">mesa {n.tableNumber}</span></p>
                : null}
        </div>
      ))}


    </div>
  );
}

function ThereArentNotifications() {
  return (
    <div className="flex flex-col gap-2.5 w-full items-center justify-center mt-10 text-gray-600">
      <Bell className="size-9" />
      <span>No hay Notificaciones</span>
    </div>
  )
}

export { ThereArentNotifications, NotificationPanel }
export type { ToastNotifications }