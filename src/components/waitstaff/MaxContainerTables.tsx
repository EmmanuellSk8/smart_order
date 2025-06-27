import { ButtonTableBusy, CardTable, CardTableTitle, TableState } from "./Tables";

type Props = {
    mesas: number[];
    onSeleccionar: (n: number) => void;
    onIrResumen: (n: number) => void;
    onGoAddDishes: (n: number) => void;

};

export default function MaxContainerTables({ mesas, onSeleccionar, onGoAddDishes, onIrResumen }: Props) {

    return (

        <div className="grid grid-cols-3 gap-4 max-xl:flex max-xl:flex-wrap">
            {mesas.map((n) => (
                <CardTable className="w-full" key={n}>
                    <CardTableTitle>Mesa {n}</CardTableTitle>
                    <TableState />
                    <button
                        onClick={() => {
                            onSeleccionar(n)
                        }}
                        className='bg-black text-white py-2.5 px-3 rounded-lg mt-8 mb-3 w-full cursor-pointer'><span className="font-semibold">Iniciar pedido</span></button>
                    <ButtonTableBusy
                        numeroMesa={n}
                        onIrResumen={() => onIrResumen(n)}
                        onGoAddDishes={() => onGoAddDishes(n)}
                    />
                </CardTable>
            ))}
        </div>
    )
}