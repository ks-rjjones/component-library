import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ButtonPage from "src/pages/buttonPage";
import CheckboxPage from "src/pages/checkboxPage";
import ErrorPage from "src/pages/errorPage";
import FormPage from "src/pages/formPage";
import InputPage from "src/pages/inputPage";
import ListPage from "src/pages/listPage";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "src/routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "components/button",
        element: <ButtonPage />,
      },
      {
        path: "components/checkbox",
        element: <CheckboxPage />,
      },
      {
        path: "components/input",
        element: <InputPage />,
      },
      {
        path: "components/list",
        element: <ListPage />,
      },
      {
        path: "components/form",
        element: <FormPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
