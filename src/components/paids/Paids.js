import React, { useContext, useEffect } from "react";
import "./Paids.css";

import Sidebar from "./Sidebar";
import AuthContext from "../../context/authentications/authContext";

export default function Paids() {
  const authContext = useContext(AuthContext);
  const { userAuthenticate } = authContext;

  useEffect(() => {
    userAuthenticate();
  }, []);

  return (
    <div className="">
      <Sidebar />
    </div>
  );
}
