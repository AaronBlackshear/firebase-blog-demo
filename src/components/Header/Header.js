import React from "react";

import { auth, googleAuthProvider } from "../../firebase";

export default function Header() {
  const handleUserAuth = () => {
    if (auth.currentUser) {
      auth.signOut();
    } else {
      var provider = googleAuthProvider
      auth
        .signInWithPopup(provider)
        .then(result => {
          let user = result.user;
          console.log(user);
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="Header--Container">
      <h1 className="Header--Title">MySuperAwesomeBlog</h1>
      <ul className="Header--UL">
        <li className="Header--LI">Messages</li>
        <li className="Header--LI" onClick={handleUserAuth}>
          Log In
        </li>
      </ul>
    </div>
  );
}
