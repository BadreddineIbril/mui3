import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout";
import Home from "@/pages/home";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/*",
          element: <>404</>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
