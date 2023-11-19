import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import User from "./pages/user";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Basket from "./pages/Basket";
import Root from "./pages/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/basket",
    element: <Basket />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <App>
    <RouterProvider router={router} />
  </App>
);
