type KitchenContainerProps = {
  children: React.ReactNode;
};

export default function KitchenContainer({ children }: KitchenContainerProps) {
  return (
    <div className="flex flex-col h-screen bg-[#F9FAFB] p-4 gap-4">
      {children}
    </div>
  );
}
