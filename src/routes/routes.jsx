import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main/Main";
import Login from "../pages/Login/Login";
import SellForm from "../pages/SellForm/SellForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sell-website",
        element: <SellForm />,
      },
    ],
  },
]);

export default router;
