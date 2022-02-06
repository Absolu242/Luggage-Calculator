import React, { createContext, useReducer, useMemo } from "react";
import { reducer } from "./AppReducer";

export const AppContext = createContext();

const initialState = {
  inventory: [],
  selected: [],
};

export function AppProvider({ children }) {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
