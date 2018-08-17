import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import CreatePost from "./components/CreatePost/CreatePost";
import MyPosts from "./components/MyPosts/MyPosts";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/create-post" component={CreatePost} />
    <Route path="/my-posts" component={MyPosts} />
  </Switch>
);
