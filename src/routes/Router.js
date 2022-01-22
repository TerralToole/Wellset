import React from "react";
import {
  BrowserRouter
} from "react-router-dom";
import AppStack from "./AppStack";

function Router() {
  return (
    <BrowserRouter>
      <AppStack />
    </BrowserRouter>
  )
}

export default Router;
