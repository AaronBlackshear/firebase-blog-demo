import React, { PureComponent } from "react";

import map from "lodash.map";
import { database } from "firebase";

class Post extends PureComponent {
  state = {
    posts: {}
  };

  componentDidMount() {
    database()
      .ref("/posts")
      .orderByValue()
      .on("value", snap => {
        map(snap.val(), (value, key) => {
          this.setState({ posts: { [key]: value, ...this.state.posts } })
        })
      });
  }

  deletePost = key => {
    database()
      .ref("/posts")
      .child(key)
      .set(null);
  };

  render() {
    const { posts } = this.state;

    let displayPosts = map(posts, (post, key) => {
      return (
        <section key={key} className="Post--Container">
          <div className="Post-Alter--Container">
            <i className="fas fa-pencil-alt Post--Alter" />
            <i
              className="fas fa-times-circle Post--Alter"
              onClick={() => this.deletePost(key)}
            />
          </div>
          <h1 className="Post--Title">{post.title}</h1>
          <p className="Post--Body">{post.body}</p>
        </section>
      );
    });

    return <div>{displayPosts}</div>;
  }
}

export default Post;
