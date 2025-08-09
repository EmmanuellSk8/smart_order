import { Search } from "lucide-react";
import { useKitchenContext } from "../../hooks/useKitchenContext";

export default function TableFilter() {
  const { searchFilter, setSearchFilter } = useKitchenContext();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 w-full border border-gray-200 bg-white rounded-xl p-5">
      <h3 className="text-sm font-bold mb-1">Filtros</h3>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
          type="text"
          placeholder="Buscar mesa..."
          value={searchFilter}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}
