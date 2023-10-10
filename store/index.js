import { create } from "zustand";

const categoriesStore = create((set) => ({
  categories: [],
  setCategories: (categories) => set({ categories }),
}));

const authStore = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));

export { categoriesStore, authStore };
