"use client";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  hasToken: boolean;
  setToken: (val: boolean) => void;
};

const AuthContext = createContext<AuthContextType>({
  hasToken: false,
  setToken: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [hasToken, setHasToken] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const token = localStorage.getItem("token");
    setHasToken(!!token);
  }, []);

  const setToken = (val: boolean) => {
    if (isClient) {
      if (val) {
        localStorage.setItem("token", "true");
      } else {
        localStorage.removeItem("token");
      }
    }
    setHasToken(val);
  };

  return (
    <AuthContext.Provider value={{ hasToken, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
