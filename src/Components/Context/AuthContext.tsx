import React from "react";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../../firebaseConfig";
import { User } from "firebase/auth";
type AuthContextType = {
  user: User | null;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  console.log(user, "user");
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((state) => {
      setUser(state);
    });
    return unsubscribe;
  });

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
