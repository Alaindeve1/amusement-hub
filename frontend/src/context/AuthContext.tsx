"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "@/lib/api";

interface User {
  id: number;
  email: string;
  username: string;
  role?: string;
  [k: string]: any;
}

interface AuthContextValue {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: { email: string; username: string; password: string; first_name?: string; last_name?: string; }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("ah_auth");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUser(parsed.user || null);
        setToken(parsed.token || null);
      } catch {}
    }
    setLoading(false);
  }, []);

  const persist = (next: { user: User | null; token: string | null }) => {
    setUser(next.user);
    setToken(next.token);
    if (next.user && next.token) {
      localStorage.setItem("ah_auth", JSON.stringify(next));
    } else {
      localStorage.removeItem("ah_auth");
    }
  };

  const value = useMemo<AuthContextValue>(() => ({
    user,
    token,
    loading,
    async login(email: string, password: string) {
      const res = await api.login({ email, password_hash: password });
      persist({ user: res.user as User, token: res.token });
    },
    async register(data) {
      const res = await api.register({
        email: data.email,
        username: data.username,
        password_hash: data.password,
        first_name: data.first_name,
        last_name: data.last_name,
      });
      persist({ user: res.user as User, token: res.token });
    },
    logout() {
      persist({ user: null, token: null });
    }
  }), [user, token, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
