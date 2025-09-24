import { getCurrentUser, type User } from "api/user";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext<{ user: User | null, loading: boolean }>({ user: null, loading: true });

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider value={{ loading, user }}>
      {children}
    </UserContext.Provider>
  );
}