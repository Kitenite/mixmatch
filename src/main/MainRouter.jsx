import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import SwipePage from './SwipePage'
import MessagesPage from '../messages/Messenger/Messenger'
import ProfilePage from '../user/ProfilePage'
import { UserContext } from '../user/UserContext';

function MainRouter(props) {
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
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Consumer>
            {value => (
              <Switch>
                <Route exact path="/">
                    <Redirect to="/swipe" />
                </Route>
                <Route path="/swipe">
                    <SwipePage user={value.user}/>
                </Route>
                <Route path="/messages">
                    <MessagesPage user={value.user}/>
                </Route>
                <Route path="/profile">
                    <ProfilePage user={value.user}> {props.children} </ProfilePage>
                </Route>
              </Switch>
            )}
          </UserContext.Consumer>
      </div>
      
    </Router>
    
  );
}

export default MainRouter