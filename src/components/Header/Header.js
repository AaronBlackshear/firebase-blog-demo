import React, { Fragment } from "react";

import { Link } from "react-router-dom";
import MyContext from "../../MyContext";

export default function Header() {
  return (
    <div className="Header--Container">
      <MyContext.Consumer>
        {context => (
          <Fragment>
            <h1 className="Header--Title">
              <Link to="/">MySuperAwesomeBlog</Link>
            </h1>
            <ul className="Header--UL">
              <Link to="/messages" className="Header--LI">Messages</Link>
              <Link to="/my-posts" className="Header--LI">My Posts</Link>
              <Link to="/create-post" className="Header--LI">Create Post</Link>
              <Link to="/" className="Header--LI" onClick={context.handleUserAuth}>
                {!context.state.currentUser.uid ? "Sign In" : "Sign Out"}
              </Link>
            </ul>
          </Fragment>
        )}
      </MyContext.Consumer>
    </div>
  );
}
