import React, { Component } from "react";

import forEach from "lodash.foreach";
import { database } from "firebase";

class Post extends Component {
  state = {
    posts: {}
  };

  render() {
    let postsArray = [];

    database()
      .ref("posts")
      .once("value", snap => {
        if (this.state.posts !== snap.val()) {
          this.setState({ posts: snap.val() });
        }
      });

    forEach(this.state.posts, value => {
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
            <section key={ind} className="Post--Container">
              <div className="Post-Alter--Container">
                <i className="fas fa-pencil-alt Post--Alter" onClick={() => this.deletePost()} />
                <i className="fas fa-times-circle Post--Alter" />
              </div>
              <h1 className="Post--Title">{cur.title}</h1>
              <p className="Post--Body">{cur.body}</p>
            </section>
          );
        })}
      </div>
    );
  }
}

export default Post;
