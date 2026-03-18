import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import JobApply from "../pages/jobApply/JobApply";
import MyApplication from "../pages/myApplication/MyApplication";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import ViewApplication from "../pages/viewApplications/ViewApplication";

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
        path: "/register",
        Component: Register,
      },
      {
        path: "/signIn",
        Component: SignIn,
      },
      {
        path: "/jobs/:id",
        Component: JobDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoutes><JobApply></JobApply></PrivateRoutes>
      },
      {
        path: '/myApplications',
        element: <PrivateRoutes><MyApplication></MyApplication></PrivateRoutes>
      },
      {
        path: '/addJob',
        element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
      },
      {
        path: '/myPostedJobs',
        element: <PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
      },
      {
        path: 'applications/:job_id',
        element: <PrivateRoutes><ViewApplication></ViewApplication></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:3000/applications/job/${params.job_id}`)
      }

    ],
  },
]);

export default router;
