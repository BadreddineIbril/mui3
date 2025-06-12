import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout";
import Home from "@/pages/home";
import Doc from "@/pages/doc";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        // {
        //   path: "/",
        //   element: <Home />,
        // },
        // {
        //   path: "/doc/:id?",
        //   element: <Doc />,
        // },
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
