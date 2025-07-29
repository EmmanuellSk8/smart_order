

export const TABS = [
  { key: "orders", label: "Vista de Pedidos" },
  { key: "categories", label: "Por Categorias" },
  { key: "analytics", label: "Analiticas" },
] as const;

export type TabKey = (typeof TABS)[number]["key"];

type KitchenTabsProps = {
  currentTab: TabKey;
  setCurrentTab: (tab: TabKey) => void;
};

export default function KitchenTabs({
  currentTab,
  setCurrentTab,
}: KitchenTabsProps) {
  return (
    <div className="flex justify-center items-center gap-56 bg-white">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          role="tab"
          aria-selected={currentTab === tab.key}
          className={`px-6 py-2 font-medium transition border-b-2 -mb-px cursor-pointer ${
            currentTab === tab.key
              ? "text-black font-semibold bg-gray-50"
              : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
          }`}
          onClick={() => setCurrentTab(tab.key)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
