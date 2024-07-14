import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import Management from "./pages/Management";
import Details from "./pages/details";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Add from "./pages/add-page";
import Update from "./pages/update-page";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: <Management />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
        {
          path: "/update/:id",
          element: <Update />,
        },
        {
          path: "/add",
          element: <Add />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
