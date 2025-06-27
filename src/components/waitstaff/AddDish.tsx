import { ArrowLeft, Minus, Plus } from "lucide-react"
import type { GeneralProps } from "../../interfaces/Props.interfaces"

type Props = {
    numeroMesa: number;
    onVolver: () => void;
}

function AddDishHeader({ numeroMesa, onVolver, ...props }: Props & GeneralProps) {
    return (
        <>
            <div className="flex w-full">
                <div className="flex items-center gap-8 mb-7 w-full">
                    <button
                        onClick={onVolver}
                        className="bg-white flex items-center border-1 w-32 px-3 py-2 justify-between rounded-sm font-semibold border-gray-300 hover:bg-gray-100/80 cursor-pointer"><ArrowLeft className="size-5" /> Volver </button>

                    <p className="flex flex-col gap-0.5"><span className="text-2xl font-bold">Mesa {numeroMesa}</span><span className="text-gray-600">Agregar platillos al pedido</span></p>
                </div>
                <div className="">{props.children}</div>
            </div>
        </>
    )
}

function AddDish({ className, image, quantity = 1, setQuantity, ...props }: GeneralProps) {

    const increment = () => {
        if (quantity < 30) setQuantity?.(prev => prev + 1);
    };

    const decrement = () => {
        if (quantity > 1) setQuantity?.(prev => prev - 1);
    };

    return (
        <>
            <div className={`w-full items-center justify-center mb-6 flex mt-8 ${className}`}>
                {image && <img src={image} className={`${className}`} alt="" />}
                <div className="w-full text-center justify-center flex">
                    <span>{props.children}</span>
                </div>
            </div>

            <div className="mb-6">
                <p className="text-lg mb-1.5">Cantidad</p>
                <div className="flex gap-6 items-center">
                    <div className="border-1 border-gray-400 rounded-sm p-0.5 cursor-pointer">
                        <Minus onClick={decrement} />
                    </div>
                    <span className="font-semibold">{quantity}</span>
                    <div className="border-1 border-gray-400 rounded-sm p-0.5 cursor-pointer">
                        <Plus onClick={increment} />
                    </div>
                </div>
            </div>
        </>
    )
}

function AddDishAndNotes({ className, ...props }: GeneralProps) {

    return (
        <>
            <div className="mt-10">
                <h2 className={`text-xl font-bold ${className}`}>
                    Agregar platillo
                </h2>
                <div className="">{props.children}</div>

                <div className="flex flex-col gap-2">
                    <span>Comentarios</span>
                    <textarea placeholder="Ej: Sin cebolla, extra queso..." className={`border-1 border-gray-400 rounded-lg px-2 py-1 min-h-22 ${className}`} />

                </div>
            </div>
        </>
    )
}

function ContainerOrderDish({ className, ...props }: GeneralProps) {
    return (
        <>
            <div className={`border-1 border-gray-300 py-5 px-6 rounded-sm bg-white ${className}`}>
                {props.children}
            </div>
        </>
    )
}

export { AddDishHeader, AddDish, ContainerOrderDish, AddDishAndNotes }