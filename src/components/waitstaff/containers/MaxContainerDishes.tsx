import { AddDish, AddDishAndNotes, AddDishHeader, ContainerOrderDish } from "../AddDish";
import { CardDishesCategory, CardDishesImg, CardDishesPrice, CardDishesTitle, ContainerAddDishes, SearchEngine, ContainerSectionAddDish, CardDishesQuantity } from "../CardDishes";
import Data from "../../../assets/data/data";
import { Minus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { UseOrders } from "../../context/OrderContext";

type Props = {
  tableNumber: number;
  OnBack: () => void;
}

type Dish = {
  id: number;
  name: string;
  image: string;
  price?: number;
  quantity?: number;
  notes?: string
};

export default function MaxContainerDishes({ tableNumber, OnBack }: Props) {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [orders, setOrders] = useState<Dish[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [notes, setNotes] = useState<string>("");
  const [searchText, setSearchText] = useState("")
  const [filterCategory, setFilterCategory] = useState("Entradas")

  const deleteOrder = (id: number) => {
    setOrders(prev => prev.filter(p => p.id !== id));
  };

  const { addOrder } = UseOrders();

  const handleSendOrders = () => {
    if (orders.length === 0) return;

    orders.forEach((order) => {
      const newOrder = {
        id: Date.now().toString() + Math.random().toString(36).substring(2),
        name: order.name,
        image: order.image,
        quantity: order.quantity || 1,
        status: "cooking" as const,
        table: Number(tableNumber),
        time: new Date().toLocaleTimeString(),
        category: filterCategory,
        note: order.notes || "",
      };
      addOrder(newOrder);
    });
    setOrders([]);
  };

  const handleConfirmOrder = (newOrder: Dish) => {
    setOrders(prev => {
      const exists = prev.find(p => p.id === newOrder.id);
      if (exists) {
        return prev.map(p =>
          p.id === newOrder.id
            ? { ...p, quantity: (p.quantity || 1) + (newOrder.quantity || 1) }
            : p
        );
      } else {
        return [...prev, newOrder];
      }
    });
    setSelectedDish(null);
    setNotes("")
  };

  const normalize = (text: string) =>
    text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

  return (
    <>
      <AddDishHeader tableNumber={tableNumber} OnBack={OnBack}>
        {orders.length > 0 && (
          <button
            onClick={handleSendOrders}
            className="bg-black text-white px-4 py-2 rounded-sm text-sm font-semibold flex items-center gap-2 text-nowrap mt-6"
          > <ShoppingCart className="size-4.5" />
            Enviar pedido ({orders.length})
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
                        setSelectedDish(item)
                      }}
                      key={item.id}
                      className="border-1 border-gray-300 rounded-lg bg-white flex items-center gap-5 p-3.5 w-full"
                    >
                      <CardDishesImg
                        className="size-30 aspect-square object-cover"
                        image={item.image}
                      />
                      <div className="flex flex-col gap-2.5">
                        <div className="gap-0.5 flex flex-col items-start">
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

          {selectedDish && (
            <ContainerOrderDish className="order-dish-responsive w-full xl:max-w-[1950px] lg:max-w-[1000px] sm:max-w-[500px] min-w-[450px] sm:flex-shrink-0 sm:w-auto sm:px-10 mb-8">
              <div className="p-4">

                <div className="flex items-center flex-col">
                  <img
                    className="size-30 object-cover aspect-square rounded-lg"
                    src={selectedDish.image}
                    alt=""
                  />
                  <p className="text-lg font-semibold">{selectedDish.name}</p>
                  <p className="text-green-700 text-lg font-semibold">${selectedDish.price}</p>
                </div>

                <AddDish quantity={quantity} setQuantity={setQuantity} />
                <AddDishAndNotes notes={notes} setNotes={setNotes} />
                <button
                  onClick={() =>
                    handleConfirmOrder({
                      id: selectedDish.id,
                      name: selectedDish.name,
                      image: selectedDish.image,
                      price: selectedDish.price,
                      notes: notes,
                      quantity: quantity,
                    })
                  }
                  className="mt-4 bg-black text-white font-semibold py-2 px-4 rounded-sm w-full"
                >
                  Agregar al pedido
                </button>
              </div>
            </ContainerOrderDish>
          )}

          {orders.length > 0 && (
            <ContainerOrderDish className="flex flex-col gap-6.5 min-w-[450px]">
              <h2 className="mb-4 text-lg font-semibold">Pedido Actual</h2>
              {orders.map((order) => (
                <div key={order.id} className="flex items-center gap-3 bg-gray-200/80 px-3 py-2 rounded-sm">
                  <img
                    className="size-12 object-cover aspect-square rounded-lg"
                    src={order.image}
                    alt=""
                  />
                  <div className="flex items-center w-full justify-between">
                    <div>
                      <p className="text-sm font-semibold">{order.name}</p>
                      <CardDishesQuantity>{order.quantity}</CardDishesQuantity>
                    </div>
                    <div
                      className="border-1 border-gray-300 p-1.5 rounded-lg cursor-pointer"
                      onClick={() => deleteOrder(order.id)}
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