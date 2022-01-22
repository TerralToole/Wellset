import {
  Routes,
  Route
} from "react-router-dom";
import App from "../App";
import Splash from "../pages/Splash";
import Feed from "../pages/Feed";
import React from "react";
import Article from "../pages/Article";


function AppStack() {
  return (
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<Splash/>}/>
        <Route path="feed" element={<Feed/>}/>
        <Route path="review/:reviewId" element={<Article/>}/>
      </Route>
    </Routes>
  )
}

export default AppStack;
