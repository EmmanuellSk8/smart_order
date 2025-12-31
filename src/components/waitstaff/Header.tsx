import { UsersRound, ChefHat } from 'lucide-react';
import type { HeaderProps } from '../../interfaces/Props.interfaces';

export default function Header({ onHeader, onTables, setCurrentView, currentView }: HeaderProps) {
    return (
        <>
            <header className="bg-white w-full">
                <div className="flex w-full justify-between p-3 items-center">
                    <h2 className='text-[28px] font-bold'>Sistema de Meseros</h2>
                    <div className="flex gap-4 ">

                        <button
                            onClick={() => { setCurrentView("tables"); onTables(); }}
                            className={`flex gap-2 py-2.5 px-5 rounded-sm border-1 border-gray-600 cursor-pointer  ${currentView === "tables"
                                ? "bg-black text-white font-semibold"
                                : "bg-white text-black"
                                }`}><UsersRound />Mesas</button>

                        <button
                            className={`flex gap-2 py-2.5 px-5 rounded-sm border-1 border-gray-600 cursor-pointer ${currentView === "cocina"
                                ? "bg-black text-white font-semibold"
                                : "bg-white text-black"
                                }`}

                            onClick={() => {
                                onHeader();
                                setCurrentView("cocina");
                            }}>
                            <ChefHat />
                            Cocina</button>
                    </div>
                </div>
                <div className="border-b-1 border-gray-300 mt-2 w-full h-1"></div>
            </header>
        </>
    );
}