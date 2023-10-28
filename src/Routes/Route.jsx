import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import Home from "../components/Home/Home";
import AddProduct from "../components/Add product/AddProduct";
import MyCart from "../components/MyCart/MyCart";
import Login from "../Authintication/Login/Login";
import Register from "../Authintication/Register/Register";
import Products from "../components/Products/Products";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/brandData.json')
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            },{
                path:'/myCart',
                element:<MyCart></MyCart>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/products',
                element:<Products></Products>,
                loader: () => fetch('http://localhost:5001/products')
            }
        ]
    }
])

export default routes;