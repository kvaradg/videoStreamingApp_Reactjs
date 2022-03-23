import { useRoutes } from "react-router-dom";
import SignIn from "../components/authComponent/SignIn";
import SignUp from "../components/authComponent/SignUp";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/pageNotFound/PageNotFound";

let StreamBasedRoutes = () => {
  let StreamRoutes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "signin",
      element: <SignIn />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return StreamRoutes;
};

export default StreamBasedRoutes;
