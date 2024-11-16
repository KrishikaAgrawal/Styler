// src/context/useUserContext.tsx
import { useContext } from "react";
import { UserContext, UserContextProps } from "./UserContext";

const useUserContext = (): UserContextProps => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export default useUserContext;
