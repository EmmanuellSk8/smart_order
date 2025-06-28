import { OrderBoard, ViewOrdersHeader } from "./ViewOrders";

type Props = {
    onGoAddDishes: () => void;
    onVolver: () => void;
    numeroMesa: number;
}

export default function MaxContainerViewOrders({ onVolver, onGoAddDishes, numeroMesa }: Props) {

    return (
        <>
            <ViewOrdersHeader onGoAddDishes={onGoAddDishes} numeroMesa={numeroMesa} onVolver={onVolver}>
                {1}
                {/* ESTE 1 HACE REFERENCIA AL NUMERO DE ÓRDENES */}
            </ViewOrdersHeader>
            <OrderBoard numeroMesa={numeroMesa} onVolver={onVolver} onGoAddDishes={onGoAddDishes}></OrderBoard>
        </>
    )
}