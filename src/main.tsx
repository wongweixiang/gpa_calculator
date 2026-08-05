import { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import { DiplomaChoice } from "./DiplomaChoice";
import { type Diploma } from "./DiplomaChoice/types.ts";
import { DiplomaContextProvider } from "./DiplomaContextProvider.tsx";
import { defaultDiploma } from "./DiplomaChoice/types.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/diploma-choice",
    element: <DiplomaChoice />,
  },
]);

type DiplomaContextValue = {
  diploma: Diploma;
  setDiploma: (dip: Diploma) => void;
};

export const DiplomaContext = createContext<DiplomaContextValue>({
  diploma: defaultDiploma,
  setDiploma: () => {},
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DiplomaContextProvider>
      <RouterProvider router={router} />
    </DiplomaContextProvider>
  </StrictMode>,
);
