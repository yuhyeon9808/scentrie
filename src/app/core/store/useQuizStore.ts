import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Category } from '../types/fragranceFinder';

interface QuizState {
  pick: Record<number, Category>;
  setPick: (id: number, category: Category) => void;
  reset: () => void;
}

export const useQuizStore = create<QuizState>()(
  persist(
    (set) => ({
      pick: {},
      setPick: (id, category) =>
        set((state) => ({ pick: { ...state.pick, [id]: category } })),
      reset: () => set({ pick: {} }),
    }),
    {
      name: 'quiz-picks',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
