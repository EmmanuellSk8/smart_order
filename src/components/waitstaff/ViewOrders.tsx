import { ArrowLeft, CheckCircle, Clock, Plus, Receipt, Trash2 } from "lucide-react"
import type { GeneralProps } from "../../interfaces/Props.interfaces"
import { useState } from "react"
import type { Order } from "../../interfaces/Order.interfaces"

type Props = {
    numeroMesa: number;
    onVolver: () => void;
    onGoAddDishes: () => void;
}

type OrdersOverViewProps = {
    ready: number;
    cooking: number;
};

function ViewOrdersHeader({ onVolver, onGoAddDishes, numeroMesa, ...props }: GeneralProps & Props) {
    return (
        <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-8 mb-7">
                <button
                    onClick={onVolver}
                    className="bg-white flex items-center border-1 w-32 px-3 py-2 justify-between rounded-sm font-semibold border-gray-300 hover:bg-gray-100/80 cursor-pointer"><ArrowLeft className="size-5"
                    /> Volver </button>
                <p className="flex flex-col gap-0.5"><span className="text-2xl font-bold">Mesa {numeroMesa}</span><span className="text-gray-600 flex gap-2">Órdenes ({props.children})</span></p>
            </div>
            <div className="flex gap-3">
                <button
                    onClick={onGoAddDishes}
                    className="cursor-pointer hover:scale-105 duration-300 flex rounded-sm bg-white py-2 px-5 items-center gap-2 border-1 border-gray-300 "><Plus className="size-5" /> Agregar Más</button>
                <button className="cursor-pointer hover:scale-105 duration-300 flex rounded-sm bg-green-600 py-2 px-5 items-center gap-2 text-white"><Receipt className="size-5" /> Generar Factura</button>
                <button className="cursor-pointer hover:scale-105 duration-300 flex rounded-sm bg-red-500 py-2 px-5 items-center gap-2 text-white"><Trash2 className="size-5" /> Limpiar Mesa</button>
            </div>
        </div>
    )
}

function CardOrders({ order }: GeneralProps) {
    return (
        <>
            <div className="bg-white rounded-md shadow-sm p-4">
                <div className="text-xs text-gray-500 mb-2">{order?.time}</div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden">
                        <img src={order?.image} alt={order?.name} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <div className="flex flex-col text-sm">
                            <span className="font-semibold">{order?.name}</span>
                            <span className="text-gray-500">Cantidad: {order?.quantity}</span>
                            {order?.note && <span className="text-blue-500 text-xs">Nota: {order?.note}</span>}
                        </div>
                        <div className="flex flex-col gap-4 h-full items-center">
                            <p className="flex items-center gap-1">
                                {order?.status === "preparando" ? (
                                    <span className="text-orange-600 flex items-center gap-2"><Clock size={16} /> Preparando</span>
                                ) : (
                                    <span className="text-green-600 flex items-center gap-2"><CheckCircle size={16} /> Listo</span>
                                )}
                            </p>
                            <span className="bg-white/90 py-0.5 border-gray-300 border-1 px-3 rounded-xl text-sm">{order?.category}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const OrderColumn = ({ title, icon, orders, color, bgColor }: GeneralProps) => {
    return (
        <>
            <div className="flex flex-col w-full">

                <div className="flex items-center gap-2 mb-4">
                    <h2 className={`font-bold text-lg flex items-center gap-2`}>
                        <span className={`text-[${color}]`}>{icon}</span>{title}
                    </h2>
                    <span
                        className={`text-sm text-[${color}] bg-[${bgColor}] rounded-full p-2`}
                    >
                        {orders?.length}
                    </span>
                </div>
                <div
                    className={`flex-1 rounded-xl bg-[${bgColor}] border-1 border-[${color}] p-4`}
                >
                    <div className="flex flex-col gap-4">
                        {orders?.map(order => (
                            <CardOrders key={order.id} order={order} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const OrderBoard = () => {
    const [orders, setOrders] = useState<Order[]>([
        {
            id: "1",
            name: "Pasta Carbonara",
            status: "listo",
            quantity: 1,
            note: "Sin cebolla",
            image: "https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg",
            category: "Pasta",
            time: new Date().toLocaleTimeString(),
        },
        {
            id: "2",
            name: "Ensalada César",
            status: "preparando",
            quantity: 1,
            image: "https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg",
            category: "Ensalada",
            time: new Date().toLocaleTimeString(),
        },
    ]);

    const marcarListo = (id: string) => {
        setOrders(prev =>
            prev.map(o =>
                o.id === id ? { ...o, status: "listo" } : o
            )
        );
    };
    const ready = orders.filter(o => o.status === "listo");
    const cooking = orders.filter(o => o.status === "preparando");

    return (
        <>
            <section className="flex flex-col md:flex-row gap-6 py-6">
                <OrderColumn
                    title="Pedidos Listos"
                    icon=<CheckCircle />
                    color="#00A63E"
                    orders={ready}
                    bgColor="#F0FDF4"

                />
                <OrderColumn
                    title="En Preparación"
                    icon=<Clock />
                    color="#F97316"
                    orders={cooking}
                    bgColor="#fff7ec"
                />
            </section>

            <div className="">
                <OrdersOverView
                    ready={orders.filter(o => o.status === "listo").length}
                    cooking={orders.filter(o => o.status === "preparando").length}
                />
            </div>
        </>
    );
};

function OrdersOverView({ ready, cooking }: OrdersOverViewProps) {
    const orders = ready + cooking;
    const total = 0;

    return (
        <>
            <div className="border-1 border-gray-300 w-full flex flex-col p-5 gap-6 rounded-lg">
                <h2 className="text-2xl font-semibold">Resumen de la mesa</h2>
                <div className="flex w-full justify-around">
                    <p className="flex flex-col items-center"><span className="text-blue-600 text-2xl font-semibold flex">{orders}</span><span className="text-gray-600 text-sm">Órdenes</span></p>

                    <p className="flex flex-col items-center"><span className="text-green-600 text-2xl font-semibold">{ready}</span><span className="text-gray-600 text-sm">Listos</span></p>

                    <p className="flex flex-col items-center"><span className="text-orange-600 text-2xl font-semibold">{cooking}</span><span className="text-gray-600 text-sm">En cocina</span></p>

                    <p className="flex flex-col items-center"><span className="text-black text-2xl font-semibold">{total}</span><span className="text-gray-600 text-sm">Total Platillos</span></p>
                </div>
            </div>
        </>
    )
}



export { ViewOrdersHeader, CardOrders, OrderColumn, OrderBoard, OrdersOverView }