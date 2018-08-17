import React, { Component } from "react";
import "./App.css";
import "./components/Scss/Styles.css";
import routes from "./routes";

import Header from "./components/Header/Header";
import MyProvider from "./MyProvider";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <Header />
          {routes}
        </div>
      </MyProvider>
    );
  }
}

export default App;
