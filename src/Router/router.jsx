import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import AddSchedule from "../Pages/AddSchedule";
import AllSchedule from "../Pages/AllSchedule";

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
        element: <AddSchedule></AddSchedule>
      },
      {
        path: "/allschedule",
        element: <AllSchedule></AllSchedule>,
        loader:() => fetch('http://localhost:5000/schedule')
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
