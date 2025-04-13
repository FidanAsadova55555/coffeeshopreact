import { createBrowserRouter,  
} from "react-router";
import ProtectedRoute from "../protect";
import Products from "@/pages/shop";
import Blog from "@/pages/blog";
import BlogDetail from "@/pages/BlogDetail";
import ProductDetail from "@/pages/productdetail";
import Layout from "@/layout/layout";
import { DataNotFoundContainer } from "@/shared/notfound";
import Home from "@/pages/home";
import Sidebar from "@/layout/adminLayout";
import Login from "../login";
import Register from "../register";
import CheckoutPage from "@/pages/checkoutpage";


export const Router = createBrowserRouter([
    
    {
        path: "/",
         element:<Layout/>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "products",
                element: <Products/>,
            },
            {
                path: "products/:id",
                element: <ProductDetail />,
            },
            {
                path: "news",
                element: <Blog />,
            },
            {
                path: "news/:id",
                element: <BlogDetail />,
            },
            {
                path: "checkout",
                element:<ProtectedRoute element={<CheckoutPage />} />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/admin",
        element:<ProtectedRoute element={<Sidebar />} />,
        children: [
          {
            path: "/admin",
            element: <div>Admin</div>,
          },
        ],
      },
    {
        path: "*",
        element: (
            <div className="w-full h-full flex items-center justify-center">
                    <DataNotFoundContainer />
            </div>
        ),
    },
]);
