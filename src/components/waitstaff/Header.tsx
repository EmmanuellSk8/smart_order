import { UsersRound, ChefHat } from 'lucide-react';

export default function Header() {
    return (
        <>
            <header className="bg-white w-full">
                <div className="flex w-full justify-between p-3 items-center">
                    <h2 className='text-[28px] font-bold'>Sistema de Meseros</h2>
                    <div className="flex gap-4 ">
                        {/* al estar seleccionado (active), cambiar el fondo, el texto y el font a semibold */}
                        <button className="flex gap-2 bg-white py-2.5 px-5 rounded-sm text-black border-1 border-gray-600 font-semibold"><UsersRound />Mesas</button>
                        <button className="flex gap-2 bg-black py-2.5 px-5 rounded-sm text-white border-1 border-gray-600"><ChefHat />Cocina</button>
                    </div>
                </div>
                <div className="border-b-1 border-gray-300 mt-2 w-full h-1"></div>
            </header>

        </>
    );
}