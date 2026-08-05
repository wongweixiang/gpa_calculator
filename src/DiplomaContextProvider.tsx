import { type ReactNode } from "react";
import { DiplomaContext } from "./main.tsx";
import { type Diploma, defaultDiploma } from "./DiplomaChoice/types.ts";

import { useLocalStorage } from "./useLocalStorage.ts";

type DiplomaContextProviderProps = {
  children: ReactNode
}



export const DiplomaContextProvider: React.FC<DiplomaContextProviderProps> = ({children}) => {
  const [diploma, setDiploma] = useLocalStorage<Diploma>("diploma", defaultDiploma);

  return (
    <DiplomaContext.Provider value={{ diploma, setDiploma }}>
      {children}
    </DiplomaContext.Provider>
  );
};
