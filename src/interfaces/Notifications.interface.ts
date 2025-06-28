export interface ToastNotifications {
    id: number
    msg: string
    table: number
    callType?: "Ordenar" | "Necesitar"
}

export type ToastNotificationsProps = {
    chef: ToastNotifications[];
    table: ToastNotifications[];
    removeNotificationChef: (id: number) => void;
    removeNotificationTable: (id: number) => void;
} 