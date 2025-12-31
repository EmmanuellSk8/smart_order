import { ArrowLeft, CheckCircle, Clock, icons, UsersRound } from "lucide-react"
import type { GeneralProps, IconsProps } from "../../../interfaces/Props.interfaces";
import { UseOrders } from "../../context/OrderContext";

type Props = {
    OnBack: () => void;
}

function HeaderKitchen({ OnBack }: Props) {

    return (
        <>
            <div className="flex w-full justify-between items-center">
                <div className="flex items-center gap-8 mb-7">
                    <button
                        onClick={OnBack}
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
                    <span className="flex items-center gap-1.5 text-lg px-3 rounded-xl font-semibold "><UsersRound size={16} /> Mesa {order?.table}</span>
                    <p className="flex items-center gap-1">
                        {order?.status === "cooking" ? (
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
                                {order?.status === "cooking" ? (
                                    <span className="text-orange-600 flex items-center gap-2"><Clock size={16} /> Preparando</span>
                                ) : (
                                    <span className="text-green-600 flex items-center gap-2"><CheckCircle size={16} /> Listo</span>
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                {btnOrder?.status === "ready" && (
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

const OrderColumn = ({ title, icon, orders, iconColor, ColorNumberOrders, bgOrderCards, ...props }: GeneralProps) => {
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
                    {props.children}
                </div>
            </div>
        </>
    );
};

const OrderBoard = () => {

    const { orders } = UseOrders();
    const readyOrders = orders.filter(o => o.status === "ready");
    const cookingOrders = orders.filter(o => o.status === "cooking");

    const thereArentDishPreparing = cookingOrders.length == 0
    const thereArentDishReady = readyOrders.length == 0
    return (
        <>
            <section className="flex gap-6 py-6 justify-center h-fit max-[1060px]:flex-col">
                <OrderColumn
                    title="En progreso"
                    icon=<Clock />
                    orders={cookingOrders}
                    iconColor="kitchenIconColor"
                    ColorNumberOrders="kitchenColorNumberOrders"
                    bgOrderCards="kitchenBgOrderCards"
                >
                    {thereArentDishPreparing && <ThereArentDishes>
                        <DynamicIcon name="Clock" className="size-8" />
                        No hay órdenes en progreso</ThereArentDishes>}
                </OrderColumn>
                <OrderColumn
                    title="Listos para servir"
                    icon=<CheckCircle />
                    orders={readyOrders}
                    iconColor="readyIconColor"
                    ColorNumberOrders="readyColorNumberOrders"
                    bgOrderCards="readyBgOrderCards"
                >
                    {thereArentDishReady && <ThereArentDishes>
                        <DynamicIcon name="CircleCheck" className="size-8" />
                        No hay órdenes listas</ThereArentDishes>}
                </OrderColumn>
            </section>
        </>
    );
};

function MaxContainerKitchen({ OnBack }: Props) {
    return (
        <>
            <div>
                <HeaderKitchen OnBack={OnBack} />
                <OrderBoard></OrderBoard>
            </div>
        </>
    )
}

function ThereArentDishes({ ...props }) {
    return (
        <div className="flex flex-col gap-2.5 w-full items-center justify-center mt-10 text-gray-600">
            <span className="flex flex-col gap-2 items-center">{props.children}</span>
        </div>
    )
}

export default function DynamicIcon({ name, className, size = 24, strokeWidth = 2 }: IconsProps) {
    const LucideIcon = icons[name];

    if (!LucideIcon) return null;

    return <LucideIcon className={className} size={size} strokeWidth={strokeWidth} />;
}

export { MaxContainerKitchen, HeaderKitchen, ThereArentDishes }