import React from "react";
import { createContext, useEffect, useState } from "react";

type AuthContextType = {
  user: string;
  handleUser: (v: string) => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<string>("");

  const isAuthenticated = React.useMemo(() => {
    return !!user;
  }, [user]);

  const handleUser = (v: string) => {
    localStorage.setItem("user", v);
    setUser(v);
  };

  const getUser = () => {
    const _user = localStorage.getItem("user");
    if (_user) {
      setUser(_user);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ handleUser, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
