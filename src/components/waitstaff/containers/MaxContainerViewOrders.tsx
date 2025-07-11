import { OrderBoard, ViewOrdersHeader } from "../ViewOrders";

type Props = {
    onGoAddDishes: () => void;
    OnBack: () => void;
    tableNumber: number;
}

export default function MaxContainerViewOrders({ OnBack, onGoAddDishes, tableNumber }: Props) {
    return (
        <>
            <ViewOrdersHeader onGoAddDishes={onGoAddDishes} tableNumber={tableNumber} OnBack={OnBack}/>
            <OrderBoard tableNumber={tableNumber} OnBack={OnBack} onGoAddDishes={onGoAddDishes}></OrderBoard>
        </>
    )
}