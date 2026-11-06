import { atomWithStorage, createJSONStorage } from "jotai/utils";
import type { AuthUser } from "@/models/auth";

const sessionStorageForAuth = createJSONStorage<AuthUser | null>(() => {
  if (typeof window === "undefined") {
    return {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
    };
  }

  return window.sessionStorage;
});

export const authUserAtom = atomWithStorage<AuthUser | null>(
  "authUser",
  null,
  sessionStorageForAuth
);
