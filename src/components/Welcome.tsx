import { SquareCheckBig } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();
    return (
        <div className="overflow-hidden flex min-h-screen relative max-[1100px]:flex-wrap">
            <div className="absolute w-full h-full justify-center flex mt-40 -ml-5 pointer-events-none max-[1100px]:hidden">
                <p className="flex gap-2 text-4xl font-extrabold">
                    <SquareCheckBig strokeWidth={2.8} size={37} />
                    SMART ORDER</p>
            </div>
            <div className="flex w-full bg-gray-100 justify-center items-center">
                <div className="w-full flex flex-col items-center ">
                    <div className="max-w-[500px] rounded-2xl overflow-hidden bg-white object-cover aspect-square flex flex-col justify-between items-center mb-16">
                        <img src="https://images.ctfassets.net/pdf29us7flmy/7sWTrrGJjnAtn64qmCcoHd/4a45fc456549dba844a64b3c0b5582bb/cuanto-gana-mesero-estados-unidos.png?w=720&q=100&fm=jpg" alt="Meseros"
                        />
                        <p className="text-4xl font-semibold text-nowrap">Panel de Meseros</p>
                        <div className="w-full px-8">
                        <button className="mb-7 hover:scale-105 duration-300 ease-in-out text-white bg-orange-500/90 py-2.5 rounded-lg w-full cursor-pointer" onClick={() => navigate("/wait-staff")}>Acceder ahora</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full justify-center hidden max-[1100px]:flex">
            <div className="absolute pointer-events-none -mt-5 ">
                <p className="flex gap-2 text-4xl font-extrabold">
                    <SquareCheckBig strokeWidth={2.8} size={37} />
                    SMART ORDER</p>
            </div>
            </div>
            <div className="flex w-full bg-gray-300 justify-center items-center ">
                <div className="w-full flex flex-col items-center ">
                    <div className="max-w-[500px] rounded-2xl overflow-hidden bg-white object-cover aspect-square flex flex-col justify-between items-center mt-16">
                        <img src="https://www.nestleprofessional-latam.com/sites/default/files/styles/np_article_big/public/2023-04/mejor-chef-del-mundo-exito_0.jpg?itok=r2TucJZJ" alt="Meseros"
                        />
                        <p className="text-4xl font-semibold text-nowrap ">Panel de Chefs</p>
                        <div className="w-full px-8">
                        <button className="mb-7 hover:scale-105 duration-300 ease-in-out text-white bg-blue-500/90 py-2.5 rounded-lg w-full cursor-pointer" onClick={() => navigate("/order-panel")}>Acceder ahora</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Welcome }