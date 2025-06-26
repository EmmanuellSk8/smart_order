import { Search } from "lucide-react"
import type { CardsProps } from "./Tables"

function ContainerAddDishes ({className, ...props}: CardsProps){
    return(
        <>
        <div className={`font-semibold ${className}`}>
            {props.children}
        </div>
        </>
    )
}

function ContainerSectionAddDish ({className, ...props}: CardsProps){
    return(
        <>
        <div className={`${className}`}>
            {props.children}
        </div>
        </>
    )
}

function SearchEngine() {
    return (
        <>

            <label className="relative items-center flex w-full">
                <Search className="ml-2 absolute size-4.5 text-gray-400" />
                <input className="border-1 border-gray-300 rounded-sm py-1.5 px-9 w-full bg-white" type="text" placeholder="Buscar platillos..." />
            </label>

            <div className="mt-7 flex flex-col gap-2">
                <p>Tipo de orden</p>
                <select className="font-semibold border-1 border-gray-300 rounded-sm py-1.5 px-2 w-full bg-white">
                    <option value="">Entradas</option>
                    <option value="">Platos fuertes</option>
                    <option value="">Postres</option>
                    <option value="">Bebidas</option>
                </select>
            </div>
        </>
    )
}

function CardDishes({ className, ...props }: CardsProps) {
    return (
        <div className={`border-1 border-gray-300 w-fit rounded-lg bg-white ${className}`}>
            {props.children}
        </div>
    )
}

function CardDishesTitle({ className, ...props }: CardsProps) {
    return (
        <div className={`font-semibold ${className}`}>
            <h3>{props.children}</h3>
        </div>
    )
}

function CardDishesCategory({ className, ...props }: CardsProps) {
    return (
        <div className={`bg-gray-200/90 flex items-center py-[2px] justify-center px-2 rounded-xl ${className}`}>
          <span className="text-xs font-semibold">{props.children}</span>
        </div>
    )
}

function CardDishesPrice({ className, ...props }: CardsProps) {
    return (
        <div className={`${className}`}>
            <span className="text-[#16A34A]">${props.children}</span>
        </div>
    )
}

function CardDishesImg({ className, image }: CardsProps) {
    return (
        <img src={image} className={`rounded-lg ${className}`} alt="" />
    )
}

function CardDishesNote({ className, ...props }: CardsProps) {
    return (
        <div className={`${className}`}>
            <span className="text-[#16A34A]">${props.children}</span>
        </div>
    )
}

function CardDishesQuantity({ className, ...props }: CardsProps) {
    return (
        <div className={`${className}`}>
            <span className="text-[#16A34A]">${props.children}</span>
        </div>
    )
}

export { ContainerSectionAddDish, ContainerAddDishes, CardDishes, CardDishesTitle, CardDishesPrice, CardDishesCategory, CardDishesImg, SearchEngine, CardDishesNote, CardDishesQuantity }