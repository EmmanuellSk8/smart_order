import { AddDish, AddDishAndNotes, AddDishHeader, ContainerOrderDish } from "./AddDish";
import { CardDishesCategory, CardDishesImg, CardDishesPrice, CardDishesTitle, ContainerAddDishes, SearchEngine, ContainerSectionAddDish, CardDishesQuantity } from "./CardDishes";
import Data from "../../assets/data/data";
import { Minus, ShoppingCart } from "lucide-react";
import { useState } from "react";

type Props = {
  numeroMesa: number;
  onVolver: () => void;
}

type Dish = {
  id: number;
  name: string;
  image: string;
  price?: number;
  quantity?: number;
};

export default function MaxContainerDishes({ numeroMesa, onVolver }: Props) {
  const [platilloSeleccionado, setPlatilloSeleccionado] = useState<Dish | null>(null);
  const [cantidad, setCantidad] = useState<number>(1);
  const [pedidos, setPedidos] = useState<Dish[]>([]);
  const [searchText, setSearchText] = useState("")
  const [filterCategory, setFilterCategory] = useState("Entradas")

  const eliminarPedido = (id: number) => {
    setPedidos(prev => prev.filter(p => p.id !== id));
  };

  const handleEnviarPedidos = () => {
    console.log("Pedidos enviados:", pedidos);
    setPedidos([]); // Limpia si quieres
  };

  const handleConfirmarPedido = (nuevoPedido: Dish) => {
    setPedidos(prev => {
      const existe = prev.find(p => p.id === nuevoPedido.id);
      if (existe) {
        return prev.map(p =>
          p.id === nuevoPedido.id
            ? { ...p, quantity: (p.quantity || 1) + (nuevoPedido.quantity || 1) }
            : p
        );
      } else {
        return [...prev, nuevoPedido];
      }
    });
    setPlatilloSeleccionado(null);
  };

  const normalize = (text: string) =>
    text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

  return (
    <>
      <AddDishHeader numeroMesa={numeroMesa} onVolver={onVolver}>
        {pedidos.length > 0 && (
          <button
            onClick={handleEnviarPedidos}
            className="bg-black text-white px-4 py-2 rounded-sm text-sm font-semibold flex items-center gap-2 text-nowrap mt-6"
          > <ShoppingCart className="size-4.5" />
            Enviar pedido ({pedidos.length})
          </button>
        )}
      </AddDishHeader>

      <ContainerSectionAddDish className="flex w-full flex-wrap">

        <ContainerAddDishes className="m-9 flex-1 max-w-[1000px]">
          <SearchEngine
            searchText={searchText}
            setSearchText={setSearchText}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
          />

          <div className="container-dishes grid gap-3 mt-6 sm:grid-cols-1 md:grid-cols-2 w-full max-w-6xl mx-auto">
            {Data.filter(category => normalize(category.name) === normalize(filterCategory))
              .flatMap(category =>
                category.items
                  .filter(item =>
                    normalize(item.name).includes(normalize(searchText))
                  )
                  .map(item => (
                    <div
                      onClick={() => {
                        setPlatilloSeleccionado(item)
                      }}
                      key={item.id}
                      className="border-1 border-gray-300 rounded-lg bg-white flex items-center gap-5 p-3.5 w-full"
                    >
                      <CardDishesImg
                        className="size-30 aspect-square object-cover"
                        image={item.image}
                      />
                      <div className="flex flex-col gap-2.5">
                        <div className="gap-0.5 flex flex-col">
                          <CardDishesTitle>{item.name}</CardDishesTitle>
                          <CardDishesCategory>{category.name}</CardDishesCategory>
                        </div>
                        <CardDishesPrice className="font-semibold text-lg text-green-700">
                          {item.price.toLocaleString()}
                        </CardDishesPrice>
                      </div>
                    </div>
                  ))
              )}
          </div>
        </ContainerAddDishes>

        <div className="order-dish-responsive mt-9">

          {platilloSeleccionado && (
            <ContainerOrderDish className="order-dish-responsive w-full xl:max-w-[1950px] lg:max-w-[1000px] sm:max-w-[500px] min-w-[450px] sm:flex-shrink-0 sm:w-auto sm:px-10 mb-6">
              <div className="flex items-center flex-col">
                <img
                  className="size-30 object-cover aspect-square rounded-lg"
                  src={platilloSeleccionado.image}
                  alt=""
                />
                <p className="text-lg font-semibold">{platilloSeleccionado.name}</p>
                <p className="text-green-700 text-lg font-semibold">${platilloSeleccionado.price}</p>
              </div>

              <AddDish quantity={cantidad} setQuantity={setCantidad} />
              <AddDishAndNotes />
              <button
                onClick={() =>
                  handleConfirmarPedido({
                    id: platilloSeleccionado.id,
                    name: platilloSeleccionado.name,
                    image: platilloSeleccionado.image,
                    price: platilloSeleccionado.price,
                    quantity: cantidad, // viene de tu componente <AddDish />
                  })
                }
                className="mt-4 bg-black text-white font-semibold py-2 px-4 rounded-sm w-full"
              >
                Agregar al pedido
              </button>
            </ContainerOrderDish>
          )}

          {pedidos.length > 0 && (
            <ContainerOrderDish className="flex flex-col gap-6.5 min-w-[450px]">
              {/* // <ContainerOrderDish key={pedido.id}> */}
              <h2 className="mb-4 text-lg font-semibold">Pedido Actual</h2>
              {pedidos.map((pedido) => (
                <div key={pedido.id} className="flex items-center gap-3 bg-gray-200/80 px-3 py-2 rounded-sm">
                  <img
                    className="size-12 object-cover aspect-square rounded-lg"
                    src={pedido.image}
                    alt=""
                  />
                  <div className="flex items-center w-full justify-between">
                    <div>
                      <p className="text-sm font-semibold">{pedido.name}</p>
                      <CardDishesQuantity>{pedido.quantity}</CardDishesQuantity>
                    </div>
                    <div
                      className="border-1 border-gray-300 p-1.5 rounded-lg cursor-pointer"
                      onClick={() => eliminarPedido(pedido.id)}
                    >
                      <Minus className="size-5" />
                    </div>
                  </div>
                </div>
              ))}
            </ContainerOrderDish>
          )}

        </div>
      </ContainerSectionAddDish>
    </>

  )
}