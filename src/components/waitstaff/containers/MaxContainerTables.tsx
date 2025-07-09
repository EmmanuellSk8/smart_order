import { UseOrders } from "../../context/OrderContext";
import { ButtonTableBusy, CardTable, CardTableTitle, TableState } from "../Tables";

type Props = {
    mesas: number[];
    onSeleccionar: (n: number) => void;
    onIrResumen: (n: number) => void;
    onGoAddDishes: (n: number) => void;
};


export default function MaxContainerTables({ mesas, onSeleccionar, onGoAddDishes, onIrResumen }: Props) {
    const { orders } = UseOrders();

    return (

        <div className="containerTables grid grid-cols-3 gap-4 max-xl:flex max-xl:flex-wrap">
            {mesas.map((n) => {
                const mesaOrders = orders.filter((o) => Number(o.mesa) === Number(n));
                const hasOrders = mesaOrders.length > 0;
                const order = mesaOrders[0];

                return (
                    <CardTable className="w-full" key={n}>
                        <CardTableTitle>Mesa {n}</CardTableTitle>

                        <TableState tableState={hasOrders ? "ocupada" : "disponible"} />

                        {!hasOrders && (
                            <button
                                onClick={() => onSeleccionar(n)}
                                className='bg-black text-white py-2.5 px-3 rounded-lg mt-8 mb-3 w-full cursor-pointer'>
                                <span className="font-semibold">Iniciar pedido</span>
                            </button>
                        )}

                        {hasOrders && (
                            <ButtonTableBusy
                                numeroMesa={n}
                                order={order}
                                onIrResumen={() => onIrResumen(n)}
                                onGoAddDishes={() => onGoAddDishes(n)}
                            />
                        )}
                    </CardTable>
                );
            })}
        </div>
    )
}