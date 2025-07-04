import { ArrowLeft, CheckCircle, Clock, UsersRound } from "lucide-react"
import type { GeneralProps } from "../../interfaces/Props.interfaces";
import { UseOrders } from "./OrderContext";

type Props = {
    onVolver: () => void;
}

function HeaderKitchen({ onVolver }: Props) {

    return (
        <>
            <div className="flex w-full justify-between items-center">
                <div className="flex items-center gap-8 mb-7">
                    <button
                        onClick={onVolver}
                        className="bg-white flex items-center border-1 w-32 px-3 py-2 justify-between rounded-sm font-semibold border-gray-300 hover:bg-gray-100/80 cursor-pointer"><ArrowLeft className="size-5"
                        /> Volver </button>
                    <p className="flex flex-col gap-0.5"><span className="text-2xl font-bold">Estado de la Cocina</span><span className="text-gray-600 flex gap-2">Monitorea las órdenes en progreso y listas</span></p>
                </div>
            </div>
        </>
    )
}

function CardOrders({ order, className }: GeneralProps) {
    const { orders, markAsServed } = UseOrders();
    const btnOrder = orders.find((o) => o.id === order?.id);
    return (
        <>
            <div className={`rounded-md shadow-sm p-4 ${className}`}>
                <div className="flex justify-between mb-2">
                    <span className="flex items-center gap-1.5 text-lg px-3 rounded-xl font-semibold "><UsersRound size={16} /> Mesa {order?.mesa}</span>
                    <p className="flex items-center gap-1">
                        {order?.status === "preparando" ? (
                            <span className="text-orange-600 flex items-center gap-2 text-sm bg-[#FFEDD5] px-3 rounded-2xl">
                                En Cocina</span>
                        ) : (
                            <span className="text-green-600 flex items-center gap-2 text-sm bg-[#DCFCE7] px-3 rounded-2xl">Listo</span>
                        )}
                    </p>
                </div>
                <div className="flex items-center gap-4 bg-white p-2.5 ">
                    <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden">
                        <img src={order?.image} alt={order?.name} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <div className="flex w-full justify-between">
                            <div className="flex flex-col text-sm">
                                <span className="font-semibold">{order?.name}</span>
                                <span className="text-gray-500">Cantidad: {order?.quantity}</span>
                                {order?.note && <span className="text-blue-500 text-xs">Nota: {order?.note}</span>}
                            </div>
                            <p className="flex items-center gap-1 text-sm">
                                {order?.status === "preparando" ? (
                                    <span className="text-orange-600 flex items-center gap-2"><Clock size={16} /> Preparando</span>
                                ) : (
                                    <span className="text-green-600 flex items-center gap-2"><CheckCircle size={16} /> Listo</span>
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                {btnOrder?.status === "listo" && (
                    <div className="w-full mt-4">
                        <button
                         onClick={() => markAsServed(order?.id)}
                        className="bg-[#16A34A] text-white w-full py-1.5 rounded-sm cursor-pointer">Marcar como servido</button>
                    </div>
                )}
            </div>
        </>
    )
}

const OrderColumn = ({ title, icon, orders, iconColor, ColorNumberOrders, bgOrderCards }: GeneralProps) => {
    return (
        <>
            <div className="flex flex-col w-full">

                <div className="flex items-center gap-2 mb-4">
                    <h2 className={`font-bold text-lg flex items-center gap-2`}>
                        <span className={`${iconColor}`}>{icon}</span>{title}
                    </h2>
                    <span
                        className={`text-sm ${ColorNumberOrders} rounded-full p-2`}
                    >
                        {orders?.length}
                    </span>
                </div>
                <div className="flex flex-col gap-4">
                    {orders?.map(order => (
                        <CardOrders className={`${bgOrderCards}`} key={order.id} order={order} />
                    ))}
                </div>
            </div>
        </>
    );
};

type OrderrPops = {
    onVolver: () => void;
}

const OrderBoard = () => {

    const { orders } = UseOrders();
    const pedidosListos = orders.filter(o => o.status === "listo");
    const pedidosPreparando = orders.filter(o => o.status === "preparando");

    return (
        <>
            <section className="flex flex-col md:flex-row gap-6 py-6 justify-center h-fit">
                <OrderColumn
                    title="En progreso"
                    icon=<Clock />
                    orders={pedidosPreparando}
                    iconColor="kitchenIconColor"
                    ColorNumberOrders="kitchenColorNumberOrders"
                    bgOrderCards="kitchenBgOrderCards"
                />
                <OrderColumn
                    title="Listos para servir"
                    icon=<CheckCircle />
                    orders={pedidosListos}
                    iconColor="readyIconColor"
                    ColorNumberOrders="readyColorNumberOrders"
                    bgOrderCards="readyBgOrderCards"
                />
            </section>
        </>
    );
};

function MaxContainerKitchen({ onVolver }: OrderrPops) {
    return (
        <>
            <div>
                <HeaderKitchen onVolver={onVolver} />
                <OrderBoard></OrderBoard>
            </div>
        </>
    )
}

export { MaxContainerKitchen, HeaderKitchen }