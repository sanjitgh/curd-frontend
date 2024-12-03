import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AddSchedule from "../Pages/AddSchedule";
import AllSchedule from "../Pages/AllSchedule";
import UpdateSchedule from "../Pages/UpdateSchedule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addschedule",
        element: <AddSchedule></AddSchedule>,
      },
      {
        path: "/allschedule",
        element: <AllSchedule></AllSchedule>,
        loader: () => fetch("https://gym-ruby-ten.vercel.app/schedule"),
      },
      {
        path: "/updateschedule/:id",
        element: <UpdateSchedule></UpdateSchedule>,
        loader: ({ params }) =>
          fetch(`https://gym-ruby-ten.vercel.app/schedule/${params.id}`),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
