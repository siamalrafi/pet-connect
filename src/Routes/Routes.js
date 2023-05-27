import Login from "../Pages/Auth/Login";
import DisplayError from "../Pages/Extra/DisplayError";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main/>,
      errorElement: <DisplayError/>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/login",
            element: <Login />,
         },
      ],
   },
]);

export default router;
