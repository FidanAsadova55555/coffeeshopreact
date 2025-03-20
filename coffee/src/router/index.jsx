import { createBrowserRouter, //Navigate 
} from "react-router-dom";

import Products from "@/pages/shop";
import Blog from "@/pages/blog";
import BlogDetail from "@/pages/BlogDetail";
import ProductDetail from "@/pages/productdetail";
import Layout from "@/layout/layout";
import { DataNotFoundContainer } from "@/shared/notfound";
import Home from "@/pages/home";

// const ProtectedRoute = ({ element }) => {
//     const { user, loading } = useAuth();

//     console.log("🔍 Checking Auth State: ", { user, loading });

//     if (loading) return <div>Loading...</div>;
//     return user ? element : <Navigate to="/login" replace />;
// };

export const Router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <Navigate to="/login" replace />, 
    // },
    {
        path: "/",
         element:<Layout/>,
         // <ProtectedRoute element={<Layout />} />, 
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
        ],
    },
    // {
    //     path: "/login",
    //     element: <AdminLogin />,
    // },
    // {
    //     path: "/register",
    //     element: <RegisterPage />,
    // },
    {
        path: "*",
        element: (
            <div className="w-full h-full flex items-center justify-center">
                {/* <ErrorBoundary> */}
                    <DataNotFoundContainer />
                {/* </ErrorBoundary> */}
            </div>
        ),
    },
]);
