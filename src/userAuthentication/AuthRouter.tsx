import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import SignUpPage from './SignUpPage'
import SignInPage from './SignInPage'

export default function AuthRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
            <li>
              <Link to="/signIn">Sign In</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Redirect to="/signUp" />
        </Route>
            <Route path="/signUp">
                <SignUpPage/>
            </Route>
            <Route path="/signIn">
                <SignInPage/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}