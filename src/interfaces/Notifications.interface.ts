export interface ToastNotifications {
    id: number
    tableNumber: number
    action?: "call-waiter" | "make-order" | "order-ready"
}

export type ToastNotificationsProps = {
    notifications: ToastNotifications[];
    removeNotification: (id: number) => void;
} 