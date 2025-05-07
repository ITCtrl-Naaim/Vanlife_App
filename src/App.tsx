// React / React Router
import { RouterProvider, createBrowserRouter } from "react-router";

// Importing Seperate Components
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout/HostLayout";

// Importing Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import SignIn from "./pages/SignIn/SignIn";
import VanDetails from "./pages/Vans/VanDetails/VanDetails";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import Income from "./pages/Host/Income/Income";
import HostVans from "./pages/Host/HostVans/HostVans";
import Reviews from "./pages/Host/Reviews/Reviews";

// Importing Loaders
import { loader as vansLoader } from "./loaders/vansLoader";
import { loader as vanDetailsLoader } from "./loaders/vanDetailsLoader";
import { loader as dashboardLoader } from "./loaders/dashboardLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "host",
        element: <HostLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: dashboardLoader,
          },
          {
            path: "income",
            element: <Income />,
          },
          {
            path: "vans",
            element: <HostVans />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "vans",
        element: <Vans />,
        loader: vansLoader,
      },
      {
        path: "vans/:id",
        element: <VanDetails />,
        loader: vanDetailsLoader,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
