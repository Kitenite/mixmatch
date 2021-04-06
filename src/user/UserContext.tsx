import { createContext } from "react";

export const UserContext = createContext({
    user: undefined as any,
    setUser: (() => {}) as any,
});

