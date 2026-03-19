import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AppLayout from './ui/AppLayout';
import Home from "./ui/Home";
import Shop from './features/shop/Shop'
import Blog from './features/blog/Blog'
import About from "./ui/About"
import Contact from './features/contact/Contact'


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return  <RouterProvider router={router} />;
}

export default App;
