import React from "react";

import { auth, googleAuthProvider, database } from "./firebase";
import MyContext from "./MyContext";

class MyProvider extends React.Component {
  state = {
    showLogin: true
  };

  componentDidMount() {
    this.handleShowLogin();
  }

  handleUserAuth = () => {
    console.log(localStorage.getItem("currentUser"));
    if (localStorage.getItem("currentUser")) {
      auth
        .signOut()
        .then(() => localStorage.removeItem("currentUser", {}))
        .then(() => (window.location.pathname = "/"));
    } else {
      let provider = googleAuthProvider;
      auth
        .signInWithPopup(provider)
        .then(result => {
          localStorage.setItem("currentUser", JSON.stringify(result.user));
        })
        .then(() => (window.location.pathname = "/"))
        .catch(err => console.log(err));
    }
  };

  handleUserPost = (title, body, uid) => {
    database
      .ref("posts")
      .push({
        title,
        body,
        author: uid,
        postID: null
      })
      .then(() => (window.location.pathname = "/"))
      .catch(err => console.log(err));
  };

  deletePost = (postID) => {
    database.ref("posts").child(postID).remove();
  }

  handleShowLogin = () => {
    if (localStorage.getItem("currentUser")) {
      this.setState({ showLogin: false });
    } else {
      this.setState({ showLogin: true });
    }
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: localStorage.getItem("currentUser"),
          handleUserAuth: this.handleUserAuth,
          handleUserPost: this.handleUserPost
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
