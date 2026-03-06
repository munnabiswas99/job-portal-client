import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/signIn',
        Component: SignIn,
      }
    ],
  },
]);

export default router;