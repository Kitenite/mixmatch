import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import SwipePage from './SwipePage'
import MessagesPage from './MessagesPage'

function MainRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/swipe">Swipe</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route exact path="/">
                <Redirect to="/swipe" />
            </Route>
            <Route path="/swipe">
                <SwipePage/>
            </Route>
            <Route path="/messages">
                <MessagesPage/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default MainRouter