import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ActivePageState {
  activePage: string;
  setActivePage: (page: string) => void;
}
export const useActivePageStore = create<ActivePageState>()(
  persist(
    (set) => ({
      activePage: '', // Default active page
      setActivePage: (page: string) => set({ activePage: page }),
    }),
    {
      name: 'active-page-storage', // Name of the storage key
    }
  )
);
