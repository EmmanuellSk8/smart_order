import { Search } from "lucide-react"
import type { GeneralProps } from "../../interfaces/Props.interfaces"

function ContainerAddDishes({ className, ...props }: GeneralProps) {
    return (
        <>
            <div className={`font-semibold ${className}`}>
                {props.children}
            </div>
        </>
    )
}

function ContainerSectionAddDish({ className, ...props }: GeneralProps) {
    return (
        <>
            <div className={`${className}`}>
                {props.children}
            </div>
        </>
    )
}

type SearchEngineProps = {
    searchText: string;
    setSearchText: (value: string) => void;
    filterCategory: string;
    setFilterCategory: (value: string) => void;
}

function SearchEngine({ searchText, setSearchText, filterCategory, setFilterCategory }: SearchEngineProps) {
    return (
        <>
            <label className="relative items-center flex w-full">
                <Search className="ml-2 absolute size-4.5 text-gray-400" />
                <input 
                value={searchText}
                onChange={(e => setSearchText(e.target.value))}
                className="border-1 border-gray-300 rounded-sm py-1.5 px-9 w-full bg-white" type="text" placeholder="Buscar platillos..." />
            </label>

            <div className="mt-7 flex flex-col gap-2">
                <p>Tipo de orden</p>
                <select 
                onChange={(e => setFilterCategory(e.target.value))}
                value={filterCategory}
                className="font-semibold border-1 border-gray-300 rounded-sm py-1.5 px-2 w-full bg-white">
                    <option value="Entradas">Entradas</option>
                    <option value="Platos Fuertes">Platos fuertes</option>
                    <option value="Postres">Postres</option>
                    <option value="Bebidas">Bebidas</option>
                </select>
            </div>
        </>
    )
}

function CardDishesTitle({ className, ...props }: GeneralProps) {
    return (
        <div className={`font-semibold ${className}`}>
            <h3>{props.children}</h3>
        </div>
    )
}

function CardDishesCategory({ className, ...props }: GeneralProps) {
    return (
        <div className={`bg-gray-200/90 flex items-center py-[2px] justify-center px-2 rounded-xl ${className}`}>
            <span className="text-xs font-semibold">{props.children}</span>
        </div>
    )
}

function CardDishesPrice({ className, ...props }: GeneralProps) {
    return (
        <div className={`${className}`}>
            <span className="text-[#16A34A]">${props.children}</span>
        </div>
    )
}

function CardDishesImg({ className, image }: GeneralProps) {
    return (
        <img src={image} className={`rounded-lg ${className}`} alt="" />
    )
}

function CardDishesNote({ className, ...props }: GeneralProps) {
    return (
        <div className={`${className}`}>
            <span className="text-[#16A34A]">${props.children}</span>
        </div>
    )
}

function CardDishesQuantity({ className, ...props }: GeneralProps) {
    return (
        <div className={`${className}`}>
            <span className="font-semibold text-gray-600 text-sm">Cantidad: {props.children}</span>
        </div>
    )
}

export { ContainerSectionAddDish, ContainerAddDishes, CardDishesTitle, CardDishesPrice, CardDishesCategory, CardDishesImg, SearchEngine, CardDishesNote, CardDishesQuantity }