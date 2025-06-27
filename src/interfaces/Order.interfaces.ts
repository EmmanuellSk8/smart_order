export type Order = {
  id: string;
  name: string;
  note?: string;
  quantity: number;
  image: string;
  category: string;
  time: string;
  status?: "listo" | "preparando";
};