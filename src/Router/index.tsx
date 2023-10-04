import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "../Components/SharedLayout";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="screens" element={Screen("screens")} />
          <Route path="tools" element={Screen("tools")} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<div>No Path Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Screen = (screen: string) => {
  return <div>{screen}</div>;
};
