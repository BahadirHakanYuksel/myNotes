import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [isMiddle, setIsMiddle] = useState(false);
  const data = {
    isMiddle,
    setIsMiddle,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default Provider;
export const useMyData = () => useContext(Context);
