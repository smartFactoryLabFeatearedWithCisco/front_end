import React from "react";
import App from "./App.jsx";
import "./index.css";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Hello from "./routes/overview.jsx";
import Overview from "./routes/overview.jsx";
import MachinDetail from "./routes/machineDetail.jsx";
import Analying from "./routes/analying.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/:overView",
        element: <Overview />,
      },
      {
        path: "/machineDetail/:machinName",
        element: <MachinDetail />,
      },
      {
        path: "/analying/:analType",
        element: <Analying />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
