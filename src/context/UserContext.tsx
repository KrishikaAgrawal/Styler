// src/context/UserContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface UserContextProps {
  isRegistered: boolean;
  setIsRegistered: (value: boolean) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <UserContext.Provider value={{ isRegistered, setIsRegistered }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
export type { UserContextProps };
