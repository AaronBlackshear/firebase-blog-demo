import React, { Component } from "react";

import forEach from "lodash.foreach";
import { database } from "firebase";

class Post extends Component {
  state = {
    posts: {}
  };

  componentDidMount() {
    database()
      .ref("posts")
      .once("value")
      .then(snap => {
        this.setState({ posts: snap.val() });
      });
  }

  render() {
    let postsArray = [];
    forEach(this.state.posts, (value, key) => {
      postsArray.push({
        title: value.title,
        body: value.body,
        uid: value.author
      });
    });

    return (
      <div>
        {postsArray.map((cur, ind) => {
          return (
            <section key={ind}>
              <h1>{cur.title}</h1>
              <p>{cur.body}</p>
            </section>
          );
        })}
      </div>
    );
  }
}

export default Post;
