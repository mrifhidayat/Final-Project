import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementAsync, decrementAsync } from "./actions";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home, Form, List, Hooks, LiftingStateUp } from "./views/indeks";
import "./App.css";

function TodoList() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const _add = () => {
    dispatch(incrementAsync());
  };

  const _substract = () => {
    dispatch(decrementAsync());
  };

  return (
    <div className="App App-header">
      <div>Counter: {counter}</div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button style={{ width: 100 }} onClick={_substract}>
          Substract
        </button>
        <button style={{ width: 100 }} onClick={_add}>
          Add
        </button>
      </div>
      <Router>
        <header className="App-header">
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/form"> Form </Link>
            </li>
            <li>
              <Link to="/list"> List </Link>
            </li>
            <li>
              <Link to="/hooks"> Hooks </Link>
            </li>
            <li>
              <Link to="/liftingstateup"> LiftingStateUp </Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/form">
            <Form />
          </Route>

          <Route path="/list">
            <List />
          </Route>

          <Route path="/hooks">
            <Hooks />
          </Route>

          <Route path="/LiftingStateUp">
            <LiftingStateUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default TodoList;
