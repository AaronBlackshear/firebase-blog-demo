import React, { Component } from "react";

import MyContext from "../../MyContext";

class CreatePost extends Component {
  state = {
    title: "",
    body: ""
  };

  handleUserInput = (name, e) => {
    this.setState({ [name]: e.target.value });
  };

  render() {
    const { title, body } = this.state;

    return (
      <div className="Content--Container">
        <MyContext.Consumer>
          {context => (
            <section className="Create-Post--Container">
              <h1 className="Create--Title">Create Post</h1>
              <div className="Post--Form">
                <div className="Form-Input--Container">
                  <h3>Title</h3>
                  <input
                    type="text"
                    className="Input--Title"
                    onChange={e => this.handleUserInput("title", e)}
                  />
                </div>
                <div className="Form-Input--Container">
                  <h3>Body</h3>
                  <textarea
                    className="Input--Body"
                    onChange={e => this.handleUserInput("body", e)}
                  />
                </div>
                <button
                  className="Form--Submit"
                  onClick={() =>
                    context.handleUserPost(
                      title,
                      body,
                      context.state.currentUser.uid
                    )
                  }
                >
                  Submit Post
                </button>
              </div>
            </section>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default CreatePost;
