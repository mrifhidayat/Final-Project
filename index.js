import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Context } from "./views/context";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";

const store = createStore(reducer, applyMiddleware(thunk));

class TopComponent extends React.Component {
  constructor() {
    super();
    this.onLangChange = () => {
      this.setState((prevState) => ({
        bahasa: prevState.bahasa === "id" ? "en" : "id",
      }));
    };

    this.onThemeChange = () => {
      this.setState((prevState) => ({
        tema: prevState.tema === "light" ? "dark" : "light",
      }));
    };

    this.state = {
      bahasa: "id",
      onLangChange: this.onLangChange,
      tema: "light",
      onThemeChange: this.onThemeChange,
    };
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <App />
      </Context.Provider>
    );
  }
}

// ReactDOM.render(<TopComponent />, document.getElementById("root"));

ReactDOM.render(
  <Provider store={store}>
    <TopComponent />
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
