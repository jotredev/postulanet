import { User } from "@prisma/client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthStore {
  auth: User | null;
  setAuth: (auth: User) => void;
  logout: () => void;
}

const useAuth = create(
  persist<AuthStore>(
    (set, get) => ({
      auth: null,
      setAuth: (auth: User) => set((state) => ({ auth })),
      logout: () =>
        set((state) => ({
          auth: null,
        })),
    }),
    {
      name: "token-template-market",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuth;
