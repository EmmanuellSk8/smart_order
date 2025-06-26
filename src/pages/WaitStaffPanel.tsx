import Header from "../components/waitstaff/Header";
import Notifications from "../components/waitstaff/Notifications";
import Activator from "../components/waitstaff/Activator";
import { AddDish, AddDishHeader, ContainerOrderDish } from "../components/waitstaff/AddDish";
import { CardDishes, CardDishesCategory, CardDishesImg, CardDishesPrice, CardDishesTitle, ContainerAddDishes, SearchEngine, ContainerSectionAddDish } from "../components/waitstaff/CardDishes";
import Dishes from "../components/waitstaff/Dishes";
import { ButtonTableAvaible, ButtonTableBusy, CardTable, CardTableTitle, TableState } from "../components/waitstaff/Tables";
import Data from "../assets/data/data";

export default function WaitStaffPanel() {
  return (
    <>
      <div className="flex h-screen max-w-[1950px]">

        <Notifications />

        <div className="flex flex-col flex-1">
          <Header />

          <main className="flex-1 overflow-auto p-4 max-w-[1600px]">
            <ContainerSectionAddDish className="flex w-full flex-wrap">

              <ContainerAddDishes className="m-9 flex-1 min-w-[300px]">
                <AddDishHeader />
                <SearchEngine />

                <div className="container-dishes grid gap-3 mt-6 sm:grid-cols-1 md:grid-cols-2 w-full max-w-6xl mx-auto">
                  {Data.map((category) =>
                    category.items.map((item) => (
                      <CardDishes
                        key={item.id}
                        className="flex items-center gap-5 p-3.5 w-full"
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
                      </CardDishes>
                    ))
                  )}
                </div>

              </ContainerAddDishes>

              <div className="order-dish-responsive">

                <ContainerOrderDish className="order-dish-responsive w-full xl:max-w-[1950px] lg:max-w-[1000px] sm:max-w-[500px] xl:w-[380px] sm:flex-shrink-0 sm:w-auto sm:px-10">
                  <AddDish>
                    <img
                      className="size-30 object-cover aspect-square rounded-lg"
                      src="https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg"
                      alt=""
                    />
                    <p className="text-lg font-semibold">Pastica</p>
                    <p className="text-green-700 text-lg font-semibold">$12.000</p>
                  </AddDish>
                </ContainerOrderDish>
              </div>

            </ContainerSectionAddDish>
          </main>

        </div>
      </div>

    </>
  );
}
{/* <CardTable className="">
<CardTitle>Mesa 1</CardTitle>
<TableState></TableState>
<ButtonTableAvaible/>
<ButtonTableBusy/>
</CardTable> */}