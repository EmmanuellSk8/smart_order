interface props{
  className?: string;
}


export default function WaitStaffPanel({ className }: props) {
  return (
    <main className={`flex-1 p-10 absolute left-1 top-0 ml-96 ${className}`}>
      <button
        className="bg-amber-500 text-white px-4 py-2 rounded"
        onClick={() => window.addNotificationTable?.('La mesa 2 está lista para ordenar')}
      >
        Mesa
      </button>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => window.addNotificationChef?.('El pedido de la mesa 2 está listo')}
      >
        Chef
      </button>
    </main>

  );
}