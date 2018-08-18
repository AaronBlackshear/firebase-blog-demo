import React from "react";

import { auth, googleAuthProvider, database } from "./firebase";
import MyContext from "./MyContext";
import { Redirect } from "react-router-dom";

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
        .then(() => <Redirect to={{pathName: "/"}} />)
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
      .then(() => <Redirect push to="/" />)
      .catch(err => console.log(err));
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
