import React, { createContext, useState } from "react";

export const AppContext = createContext<any>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<string>("fr");

  return (
    <AppContext.Provider value={{ lang, setLang }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
