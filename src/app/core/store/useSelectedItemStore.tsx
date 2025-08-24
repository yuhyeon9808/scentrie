import { create } from "zustand";

interface Selected {
  variantId: number | null;
  volume: number | null;
  price: number | null;
}

interface SelectedState {
  selected: Selected;
  setSelected: (next: Selected) => void;
}

export const useSelectedItemStore = create<SelectedState>()((set) => ({
  selected: { variantId: null, volume: null, price: null },
  setSelected: (next) => set({ selected: next }),
}));
