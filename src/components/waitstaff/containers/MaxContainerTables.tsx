import { UseOrders } from "../../context/OrderContext";
import { ButtonTableBusy, CardTable, CardTableTitle, TableState } from "../Tables";

type Props = {
    tables: number[];
    onSelect: (n: number) => void;
    onGoResumen: (n: number) => void;
    onGoAddDishes: (n: number) => void;
};

export default function MaxContainerTables({ tables, onSelect, onGoAddDishes, onGoResumen }: Props) {
    const { orders } = UseOrders();

    return (

        <div className="containerTables grid grid-cols-3 gap-4 max-xl:flex max-xl:flex-wrap">
            {tables.map((n) => {
                const tableOrders = orders.filter((o) => Number(o.table) === Number(n));
                const hasOrders = tableOrders.length > 0;
                const order = tableOrders[0];

                return (
                    <CardTable className="w-full" key={n}>
                        <CardTableTitle>Mesa {n}</CardTableTitle>

                        <TableState tableState={hasOrders ? "ocupada" : "disponible"} />

                        {!hasOrders && (
                            <button
                                onClick={() => onSelect(n)}
                                className='bg-black text-white py-2.5 px-3 rounded-lg mt-8 mb-3 w-full cursor-pointer'>
                                <span className="font-semibold">Iniciar pedido</span>
                            </button>
                        )}

                        {hasOrders && (
                            <ButtonTableBusy
                                tableNumber={n}
                                order={order}
                                onGoResumen={() => onGoResumen(n)}
                                onGoAddDishes={() => onGoAddDishes(n)}
                            />
                        )}
                    </CardTable>
                );
            })}
        </div>
    )
}