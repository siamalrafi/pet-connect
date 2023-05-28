import Login from "../Pages/Auth/Login";
import DisplayError from "../Pages/Extra/DisplayError";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Auth/SignUp";
const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      errorElement: <DisplayError />,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/signup",
            element: <SignUp />,
         },
      ],
   },
]);

export default router;
