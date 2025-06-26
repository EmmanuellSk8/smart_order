
import { Clock, Flame, Badge } from "lucide-react"
import Data from "../../assets/data/data"

export default function Dishes(){

    return(
        <>
       {Data.map((category) => (
          <div key={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    {item.popular && (
                      <Badge className="absolute top-2 left-2 bg-yellow-400 text-red-600 font-semibold">
                        <Flame className="w-3 h-3 " />
                        Popular
                      </Badge>
                    )}
                    <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 flex items-center font-medium text-gray-600 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {item.prepTime}
                    </div>
                  </div>
                  <div className="pb-2">
                    <div className="text-lg font-bold text-gray-800 flex flex-col">
                      <p>{item.name}</p>
                      <span className="text-sm text-gray-600 font-medium">{item.price} COP</span>
                    </div>
                    <div className="text-sm text-gray-600 line-clamp-2">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        </>
    )
}