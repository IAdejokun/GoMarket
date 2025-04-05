import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";


// Lazy Load Components
export const HomePage = lazy(() => import('../pages/home'));


export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
      {
        path: "home",
        element: <HomePage />,
      },
    ]);
}
