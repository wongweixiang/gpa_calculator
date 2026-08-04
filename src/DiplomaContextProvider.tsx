import { type ReactNode } from "react";
import { DiplomaContext } from "./main.tsx";

import { useLocalStorage } from "./useLocalStorage.ts";

type DiplomaContextProviderProps = {
  children: ReactNode
}



export const DiplomaContextProvider: React.FC<DiplomaContextProviderProps> = ({children}) => {
  const [diploma, setDiploma] = useLocalStorage("diploma", {});

  return (
    <DiplomaContext.Provider value={{ diploma, setDiploma }}>
      {children}
    </DiplomaContext.Provider>
  );
};
