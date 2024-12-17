import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AddTask } from "./components/AddTask";
import { Feed } from "./components/Feed";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/add-task",
    element: <AddTask />,
  },
  {
    path: "/",
    element: <Feed />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
