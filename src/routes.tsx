import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Docs from "@/pages/docs";
import Examples from "@/pages/examples";
import NotFound from "@/pages/errors/not-fround";

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
          path: "/examples",
          element: <Examples />,
        },
        { path: "/docs/:section?/:component?", element: <Docs /> },
        {
          path: "/*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
