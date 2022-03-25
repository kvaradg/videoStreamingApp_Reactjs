import React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MyAccount from "./MyAccount";

const MainProfile = () => {
  let location = useLocation();
  return (
    <div>
      <div>
        {location.pathname === "/myprofile" ? <MyAccount /> : <Outlet />}
      </div>
    </div>
  );
};

export default MainProfile;
