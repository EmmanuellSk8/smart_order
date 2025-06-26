import { ArrowLeft, Minus, Plus } from "lucide-react"
import type { CardsProps } from "./Tables"
import { useState } from "react"

function AddDishHeader() {
    return (
        <>
            <div className="flex items-center gap-8 mb-7">
                <button className="flex items-center border-1 w-32 px-3 py-2 justify-between rounded-sm font-semibold border-gray-300 hover:bg-gray-100/80 cursor-pointer"><ArrowLeft className="size-5" /> Volver </button>
                <p className="flex flex-col gap-0.5"><span className="text-2xl font-bold">Mesa 1</span><span className="text-gray-600">Agregar platillos al pedido</span></p>
            </div>
        </>
    )
}

function AddDish({ className, image, ...props }: CardsProps) {
    const [count, setCount] = useState(1);

    const increment = () => {
        if (count <= 29)
            setCount((prev) => prev + 1)
    }
    const decrement = () => {
        if (count >= 2)
            setCount((prev) => prev - 1)
    }

    return (
        <>
            <div className={`w-full items-center justify-center mb-6 flex mt-8 ${className}`}>
                <img src={image} className={`${className}`} alt="" />
                <div className="w-full text-center justify-center flex">
                    <span>{props.children}</span>
                </div>
            </div>

            <div className="mb-6">
                <p className="text-lg mb-1.5">Cantidad</p>
                <div className="flex gap-6 items-center">
                    <div className="border-1 border-gray-400 rounded-sm p-0.5">
                        <Minus onClick={decrement} />
                    </div>
                    <span className="font-semibold">{count}</span>
                    <div className="border-1 border-gray-400 rounded-sm p-0.5">
                        <Plus onClick={increment} />
                    </div>
                </div>
            </div>
        </>
    )
}

function ContainerOrderDish({ className, ...props }: CardsProps) {
    return (
        <>
            <div className="border-1 border-gray-300 py-5 px-6 rounded-sm bg-white">

                <h2 className={`text-xl font-bold ${className}`}>
                    Agregar platillo
                </h2>
                <div className="">{props.children}</div>

                <div className="flex flex-col gap-2">
                    <span>Comentarios</span>
                    <textarea placeholder="Ej: Sin cebolla, extra queso..." className={`border-1 border-gray-400 rounded-lg px-2 py-1 min-h-22 ${className}`} />
                    <button className={`flex gap-2 bg-black py-2 rounded-sm text-white border-1 border-gray-600 justify-center ${className}`}>Agregar al pedido</button>
                </div>
            </div>
        </>
    )
}

export { AddDishHeader, AddDish, ContainerOrderDish }