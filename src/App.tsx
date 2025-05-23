// Import React / React Router
import { RouterProvider, createBrowserRouter } from "react-router";

// Import Layouts
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout/HostLayout";

// Import Pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import VanDetails from "./pages/Vans/VanDetails/VanDetails";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import Income from "./pages/Host/Income/Income";
import HostVans from "./pages/Host/HostVans/HostVans";
import Reviews from "./pages/Host/Reviews/Reviews";
import HostVanDetails from "./pages/Host/HostVans/HostVanDetails/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVans/HostVanDetails/HostVanInfo/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVans/HostVanDetails/HostVanPricing/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVans/HostVanDetails/HostVanPhotos/HostVanPhotos";

// Import Loaders
import { loader as vansLoader } from "./loaders/vansLoader";
import { loader as vanDetailsLoader } from "./loaders/vanDetailsLoader";
import { loader as dashboardLoader } from "./loaders/dashboardLoader";
import { loader as hostVansLoader } from "./loaders/hostVansLoader";
import { loader as hostVanDetailsLoader } from "./loaders/hostVanDetailsLoader";
import { loader as reviewsLoader } from "./loaders/reviewsLoader";
import { loader as signInLoader } from "./loaders/signInLoader";
import { loader as signUpLoader } from "./loaders/signUpLoader";

// Import Actions
import { action as signUpAction } from "./pages/SignUp/SignUp";
import { action as signInAction } from "./pages/SignIn/SignIn";
import { checkAuth } from "./utils";
import SignOut from "./pages/SignOut/SignOut";
import ErrorBoundary from "./components/Error/ErrorBoundary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "host",
        element: <HostLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: dashboardLoader,
            errorElement: <ErrorBoundary title="Could not load dashboard" />,
          },
          {
            path: "income",
            element: <Income />,
            loader: async ({ request }) => await checkAuth(request),
            errorElement: <ErrorBoundary title="Could not load income page" />,
          },
          {
            path: "vans",
            element: <HostVans />,
            loader: hostVansLoader,
            errorElement: (
              <ErrorBoundary
                title="Could not load vans"
                desc="Something went wrong while trying to fetch vans."
              />
            ),
          },
          {
            path: "vans/:id",
            element: <HostVanDetails />,
            errorElement: (
              <ErrorBoundary
                title="Could not load van's details"
                desc="Something went wrong while trying to fetch this van. It might have been removed or doesn't exist."
              />
            ),
            loader: hostVanDetailsLoader,
            children: [
              {
                index: true,
                element: <HostVanInfo />,
                loader: async ({ request }) => await checkAuth(request),
              },
              {
                path: "pricing",
                element: <HostVanPricing />,
                loader: async ({ request }) => await checkAuth(request),
              },
              {
                path: "photos",
                element: <HostVanPhotos />,
                loader: async ({ request }) => await checkAuth(request),
              },
            ],
          },
          {
            path: "reviews",
            element: <Reviews />,
            loader: reviewsLoader,
            errorElement: <ErrorBoundary title="Could not load reviews page" />,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorBoundary title="Could not load about page" />,
      },
      {
        path: "vans",
        element: <Vans />,
        loader: vansLoader,
        errorElement: (
          <ErrorBoundary
            title="Could not load vans"
            desc="Something went wrong while trying to fetch vans."
          />
        ),
      },
      {
        path: "vans/:id",
        element: <VanDetails />,
        loader: vanDetailsLoader,
        errorElement: (
          <ErrorBoundary
            title="Could not load van's details"
            desc="Something went wrong while trying to fetch this van. It might have been removed or doesn't exist."
          />
        ),
      },
      {
        path: "signin",
        element: <SignIn />,
        loader: signInLoader,
        action: signInAction,
      },
      {
        path: "signup",
        element: <SignUp />,
        loader: signUpLoader,
        action: signUpAction,
      },
      {
        path: "signout",
        element: <SignOut />,
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
