import React from "react";
import Router from "./Router";
import { AuthProvider } from "./Components/Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
