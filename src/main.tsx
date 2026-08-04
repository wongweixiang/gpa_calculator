import { StrictMode, createContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import { DiplomaChoice, type Diploma } from "./DiplomaChoice.tsx";
import { DiplomaContextProvider } from "./DiplomaContextProvider.tsx";

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

export const DiplomaContext = createContext({
  diploma: {},
  setDiploma: (dip: Diploma) => {},
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DiplomaContextProvider>
      <RouterProvider router={router} />
    </DiplomaContextProvider>
  </StrictMode>,
);
