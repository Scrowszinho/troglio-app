import React, { createContext, useContext, useState } from 'react';

// Crie um contexto
const GlobalContext = createContext();

// Crie um provedor para envolver o componente raiz do seu aplicativo
export const GlobalProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState('');

  return (
    <GlobalContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Crie um hook personalizado para usar o contexto
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};