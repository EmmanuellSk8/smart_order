import { OrderBoard, ViewOrdersHeader } from "../ViewOrders";

type Props = {
    onGoAddDishes: () => void;
    onVolver: () => void;
    numeroMesa: number;
}

export default function MaxContainerViewOrders({ onVolver, onGoAddDishes, numeroMesa }: Props) {
    return (
        <>
            <ViewOrdersHeader onGoAddDishes={onGoAddDishes} numeroMesa={numeroMesa} onVolver={onVolver}/>
            <OrderBoard numeroMesa={numeroMesa} onVolver={onVolver} onGoAddDishes={onGoAddDishes}></OrderBoard>
        </>
    )
}