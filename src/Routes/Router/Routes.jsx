import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddToys from "../../Pages/AddToys/AddToys";
import AllToys from "../../Pages/AllToys/AllToys";
import ToyDetails from "../../Pages/ToyDetails/ToyDetails";
import SignUp from "../../Pages/Signup/SignUp";
import PrivateRoute from "./PrivateRoute";

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
            path:'signUp',
            element:<SignUp></SignUp>
        },
         {
            path:'allToys',
            element:<AllToys></AllToys>

         },
        {
            path:'AddToys',
            element:<AddToys></AddToys>
        },
        {
            path:'/toys/:id',
            element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/toys/${params.id}`)
             
        }
    ]
    },
  ]);
  export default router;