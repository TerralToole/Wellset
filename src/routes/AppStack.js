import { Routes, Route, } from "react-router-dom";
import App from "../App";
import Splash from "../pages/Splash";
import Feed from "../pages/Feed";
import React from "react";
import Article from "../pages/Article";
import SignIn from "../components/SignIn";
import User from "../components/User";

function AppStack() {
    return ( <
        Routes >
        <
        Route path = "/"
        element = { < App / > } >
        <
        Route path = "login"
        element = { < SignIn / > }
        />{" "} <
        Route index element = { < Splash / > }
        />{" "} <
        Route path = "feed"
        element = { < Feed / > }
        />{" "} <
        Route path = "user"
        element = { < User / > }
        />{" "} <
        Route path = "review/:reviewId"
        element = { < Article / > }
        />{" "} <
        Route path = "review/:userId"
        element = { < Article / > }
        />{" "} <
        /Route>{" "} <
        /Routes>
    );
}

export default AppStack;