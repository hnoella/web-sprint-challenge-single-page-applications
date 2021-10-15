import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home.js";
import Form from "./components/Form.js";

const App = () => {
  return (
    <div className="App">
      <nav>
        <h1> Pizza Pizza</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="#">Help</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
