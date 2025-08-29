import React, { createContext, useContext, useState, ReactNode } from "react";

interface Type {
  isValue: string;
  setIsValue: React.Dispatch<React.SetStateAction<string>>;
}

const TitleValueContext = createContext<Type | undefined>(undefined);

const MyProviderTitle = ({ children }: { children: ReactNode }) => {
  const [isValue, setIsValue] = React.useState("");
  return (
    <TitleValueContext.Provider value={{ isValue, setIsValue }}>
      {children}
    </TitleValueContext.Provider>
  );
};

export const useTitleContext = () => {
  const context = useContext(TitleValueContext);
  if (!context) {
    throw new Error("useTitleContext must be used within a MyProvider");
  }
  return context;
};

export default MyProviderTitle;
