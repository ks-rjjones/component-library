import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Root from "src/routes/root";
import ErrorPage from "src/pages/errorPage";
import CheckboxPage from "src/pages/checkboxPage";
import InputPage from "src/pages/inputPage";
import ListPage from "src/pages/listPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
