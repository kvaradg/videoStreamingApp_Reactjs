import { useRoutes } from "react-router-dom";
import PasswordReset from "../components/authComponent/PasswordReset";
import SignIn from "../components/authComponent/SignIn";
import SignUp from "../components/authComponent/SignUp";
import UploadMovie from "../components/movies/UploadMovie";
import MyAccount from "../components/profile/MyAccount";
import MyProfile from "../components/profile/MyProfile";
import UpdatePassword from "../components/profile/UpdatePassword";
import UploadProfilePhoto from "../components/profile/UploadProfilePhoto";
import ProtectedRoute from "../helpers/ProtectedRoute";
import Home from "../pages/home/Home";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import PhoneAuth from "./../components/authComponent/PhoneAuth";
import Movies from "./../components/movies/Movies";

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
      path: "user",
      element: (
        <ProtectedRoute>
          <MyProfile />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "upload-photo",
          element: <UploadProfilePhoto />,
        },
        {
          path: "update-password",
          element: <UpdatePassword />,
        },
        {
          path: "my-account",
          element: <MyAccount />,
        },
        {
          path: "movie",
          element: (
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "upload-movie",
              element: <UploadMovie />,
            },
          ],
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
