import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddToys from "../../Pages/AddToys/AddToys";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'AddToys',
            element:<AddToys></AddToys>
        },
    ]
    },
  ]);
  export default router;