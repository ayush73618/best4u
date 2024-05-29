import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
// import Navbar from "./components/Navbar/Navbar";
// import { useSelector } from "react-redux";
// import Notification from "./components/utilities/Notification";
// import Footer from "./components/utilities/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/pages/Root";
import Products, {
  loader as productsLoader,
} from "./components/Products/Products";
import AboutMe from "./components/pages/AboutMe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <SignUp />,
        },
        {
          path: "/products/:product_Id",
          element: <Products />,
          loader: productsLoader,
        },
        {
          path: "/aboutMe/:email",
          element: <AboutMe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
