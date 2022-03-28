import { useRoutes } from "react-router-dom";
import PasswordReset from "../components/authComponent/PasswordReset";
import SignIn from "../components/authComponent/SignIn";
import SignUp from "../components/authComponent/SignUp";
import MyAccount from "../components/profile/MyAccount";
import MyProfile from "../components/profile/MyProfile";
import UploadProfilePhoto from "../components/profile/UploadProfilePhoto";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import PhoneAuth from './../components/authComponent/PhoneAuth';

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
      path: "password-reset",
      element: <PasswordReset />,
    },
    {
      path: "phone-auth",
      element: <PhoneAuth />,
    },
    {
      path: "myprofile",
      element: <MyProfile />,
      children: [
        {
          path: "upload-photo",
          element: <UploadProfilePhoto />,
        },
        {
          path: "my-account",
          element: <MyAccount />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return StreamRoutes;
};

export default StreamBasedRoutes;
