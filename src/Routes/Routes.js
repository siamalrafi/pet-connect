import DisplayError from "../Pages/Extra/DisplayError";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main/Main");

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      errorElement: <DisplayError></DisplayError>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
      ],
   },
]);

export default router;
