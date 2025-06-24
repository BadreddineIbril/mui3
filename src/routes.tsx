import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Doc from "@/pages/doc";
import Docs from "@/pages/docs";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/", element: <>Home</> },
        { path: "/docs/:section?/:component?", element: <Docs /> },
        { path: "/:id?", element: <Doc /> },
        {
          path: "/*",
          element: <>404</>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
