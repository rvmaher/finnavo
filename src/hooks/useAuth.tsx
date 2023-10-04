import React, { useContext } from "react";
import { AuthContext } from "../Components/Context/AuthContext";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
