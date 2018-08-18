import React from "react";

import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import CreatePost from "./components/CreatePost/CreatePost";
import MyPosts from "./components/MyPosts/MyPosts";
import Messages from "./components/Messages/Messages";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/create-post" component={CreatePost} />
      <Route path="/my-posts" component={MyPosts} />
      <Route path="/messages" component={Messages} />
    </Switch>
  );
}
