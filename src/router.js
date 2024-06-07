import { createBrowserRouter } from "react-router-dom";
import App from "./app/App";
import NotFound from "./pages/notfound";
import Home from "./pages/Home";
import About from "./pages/about";
import Checkout from "./pages/checkout";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Products from "./pages/products";

export const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/checkout",
          element: <Checkout />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/product/:id",
          element: <Product />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    },
]);