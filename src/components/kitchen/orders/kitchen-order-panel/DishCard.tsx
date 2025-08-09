import { ShoppingBasket, Check  } from "lucide-react";

interface DishCardProps {
  item: {
    name: string;
    ingredients: string[];
    category: "Plato fuerte" | "Postres" | "Bebida" | "Entrada";
    dishStatus: "stand-by" | "in-progress" | "completed";
  };
  index: number;
  variant: "new" | "in-progress" | "completed";
  onMarkComplete?: () => void;
  isCompleted?: boolean;
}

const getCategoryStyles = (category: string) => {
  switch (category) {
    case "Plato fuerte":
      return "bg-blue-100 text-blue-800";
    case "Postres":
      return "bg-pink-100 text-pink-800";
    case "Bebida":
      return "bg-green-100 text-green-800";
    case "Entrada":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

function DishCard({ item, index, variant, isCompleted = false, onMarkComplete }: DishCardProps) {


  return (
    <div className= {`flex items-start ${variant === "completed" ? 'bg-green-100/50' : 'bg-white'} border rounded-lg border-gray-300 w-full p-4 mb-2 gap-4`}>
      <div className="flex w-10 h-10 rounded-full bg-[#F3F4F6] text-[#4B5563] text-sm justify-center items-center">
        {index + 1}
      </div>
      <div className="flex w-full flex-col justify-center gap-1">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium">{item.name}</h1>
          <span
            className={`px-2 flex gap-2 text-sm rounded-lg border border-gray-300 ${getCategoryStyles(
              item.category
            )}`}
          >
            {item.category}
          </span>
        </div>

        <div className="flex items-center flex-wrap gap-2">
          <ShoppingBasket className="w-4 h-4 text-emerald-400" />
          {item.ingredients.map((ingredient, ingredientIndex) => (
            <span
              key={ingredientIndex}
              className="text-sm text-gray-700 border border-gray-200 px-2 rounded-xl"
            >
              {ingredient}
            </span>
          ))}
        </div>

        {/* Botones condicionales según el variant */}
        {variant === "in-progress" && (
          <div className="inline-flex items-center mt-2">
            <button
              onClick={onMarkComplete}
              className={`flex items-center justify-center px-3 py-1 ${
                isCompleted
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              } text-sm rounded cursor-pointer`}
            >
              <Check className="w-4 h-4 mr-1" />
              <span>{isCompleted ? 'Descamarcar completado' : 'Marcar completado'}</span>
            </button>
          </div>
        )}

        {variant === "completed" && (
          <div className="mt-2">
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded">
              ✓ Completado
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default DishCard;
