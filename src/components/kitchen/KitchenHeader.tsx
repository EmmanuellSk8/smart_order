import { AlertTriangle, Clock, Target } from "lucide-react";
import { useEffect, useState } from "react";

export default function KitchenHeader() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [currentDate, setCurrentDate] = useState(new Date());
  const [timeSpan, setTimeSpan] = useState("");

  useEffect(() => {
    const now = new Date();
    const updateTime = (now: Date) => {
      setTime(now.toLocaleTimeString());
      setCurrentDate(now);

      const currentHour = now.getHours();
      if (currentHour < 12) {
        setTimeSpan("a. m.");
      } else {
        setTimeSpan("p. m.");
      }
    };

    updateTime(now);
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              className="size-8 rounded-xl"
              src="./icon.png"
              alt="SmarOrder"
              loading="lazy"
              draggable={false}
            />
            <h1 className="text-2xl font-bold text-gray-900">
              Panel de cocina
            </h1>
          </div>

          {/* Real-time Stats */}
          <div className="flex items-center gap-6 ml-8">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">2 Activos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">5 min promedio</span>
            </div>

            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="text-sm font-medium text-red-600">
                2 retrasados
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-lg font-mono font-bold">
              {time} {timeSpan}
            </div>
            <div className="text-sm text-gray-600">
              {currentDate.toLocaleDateString("es-ES")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
