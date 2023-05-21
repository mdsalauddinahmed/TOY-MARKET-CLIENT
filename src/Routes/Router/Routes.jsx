import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddToys from "../../Pages/AddToys/AddToys";
import AllToys from "../../Pages/AllToys/AllToys";
import ToyDetails from "../../Pages/ToyDetails/ToyDetails";
import SignUp from "../../Pages/Signup/SignUp";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../../Pages/Home/MyToys/MyToys";
import UpdateToys from "../../Pages/Home/MyToys/UpdateToys";
import Blog from "../../Pages/Blogs/Blog";
 

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
            path:'blog',
            element:<Blog></Blog>

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
          path:'myToys',
          element:<MyToys></MyToys>
         },
        {
            path:'AddToys',
            element:<AddToys></AddToys>
        },
        {
            path:'updateToys/:id',
            element:<UpdateToys></UpdateToys>,
            loader:({params})=>fetch(`https://y-ten-omega.vercel.app/myToys/${params.id}`)
        },
        {
            path:'/toys/:id',
            element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://y-ten-omega.vercel.app/toys/${params.id}`)
             
        }
    ]
    },
  ]);
  export default router;