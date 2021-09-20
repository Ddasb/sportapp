import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext<any>(null);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<string>("fr");
  const [createAccountInfo, setCreateAccountInfo] = useState({});

  useEffect(() => {
    console.log(createAccountInfo);
  }, [createAccountInfo]);

  return (
    <AppContext.Provider
      value={{ lang, setLang, createAccountInfo, setCreateAccountInfo }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
