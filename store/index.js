import { create } from "zustand";

const postStore = create((set) => ({
  post: [],
  setPost: (post) => set({ post }),
}));

const authStore = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
}));

export { postStore, authStore };
