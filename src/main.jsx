import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvaider from "./provider/authProvider/AuthProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvaider>
        <RouterProvider router={router} />
      </AuthProvaider>
    </QueryClientProvider>
  </React.StrictMode>
);