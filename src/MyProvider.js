import React from "react";

import { auth, googleAuthProvider, database } from "./firebase";
import MyContext from "./MyContext";

class MyProvider extends React.Component {
  state = {
    currentUser: {}
  };

  handleUserAuth = () => {
    if (this.state.currentUser.uid) {
      auth.signOut().then(() => this.setState({ currentUser: {} }));
    } else {
      let provider = googleAuthProvider;
      auth
        .signInWithPopup(provider)
        .then(result => {
          this.setState({ currentUser: result.user });
        })
        .then(res => (window.location = "/"))
        .catch(err => console.log(err));
    }
  };

  handleUserPost = (title, body, uid) => {
    database
      .ref("posts")
      .push({
        title,
        body,
        author: uid
      })
      .then(res => (window.location = "/"));
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
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
