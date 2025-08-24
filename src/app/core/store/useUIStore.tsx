import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SelectedState {
  activeMenu: string;
  setActiveMenu: (item: string) => void;
}

export const useUIStore = create<SelectedState>()(
  persist(
    (set) => ({
      activeMenu: '전체 상품',
      setActiveMenu: (item) => set({ activeMenu: item }),
    }),
    {
      name: 'UI',
    }
  )
);
