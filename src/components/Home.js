import React from "react";
import { Router, Link, Route, Switch } from "react-router-dom";

import Form from "./Form";

function Home() {
  return (
    <div>
      <div>
        <h1>Lambda Pizza</h1>
      </div>
      <div id="Pizza">
        <img src="./pizza.jpeg" alt="this is pizza" />
        <div className="Button">
          <Router>
            <button className="move">
              {" "}
              <Link id="order-pizza" to="/pizza">
                order-Pizza
              </Link>{" "}
            </button>
            <Switch>
              <Route exact path="/pizza">
                <Form />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default Home;
