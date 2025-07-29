import TableCard from "./TableCard";
import KitchenFilter from "./TableFilter";
import TablesList from "./TablesList";
import { useKitchenContext } from "../../hooks/useKitchenContext";

export default function KitchenSideBar() {
  const { orders } = useKitchenContext();

  return (
    <aside className="flex flex-col gap-12 w-full justify-center items-center">
      <KitchenFilter />
      <section className="flex flex-col gap-7 w-full">
        <TablesList title="Nuevos" count={orders.new.length} status="new">
          {orders.new.map((order) => (
            <TableCard key={order.id} order={order} variant="new" />
          ))}
        </TablesList>
        <TablesList
          title="En Proceso"
          count={orders.inProgress.length}
          status="in-progress"
        >
          {orders.inProgress.map((order) => (
            <TableCard key={order.id} order={order} variant="in-progress" />
          ))}
        </TablesList>
        <TablesList
          title="Completados"
          count={orders.completed.length}
          status="completed"
        >
          {orders.completed.map((order) => (
            <TableCard key={order.id} order={order} variant="completed" />
          ))}
        </TablesList>
      </section>
    </aside>
  );
}
