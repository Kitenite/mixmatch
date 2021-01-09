import React from 'react';
import './App.css';
import MainRouter from './main/MainRouter'

import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);


const AuthStateApp: React.FunctionComponent = () => {
    const [authState, setAuthState] = React.useState<AuthState>();
    const [user, setUser] = React.useState<object | undefined>();

    React.useEffect(() => {
        onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

  return authState === AuthState.SignedIn && user ? (
      <MainRouter user={user} >
          <AmplifySignOut />
      </MainRouter>
  ) : (

    <AmplifyAuthenticator usernameAlias="email">
      <AmplifySignUp
        slot="sign-up"
        usernameAlias="email"
        formFields={[
          {
            type: "name",
            label: "Name *",
            placeholder: "This will be seen by other users",
            required: true,
          },
          { type: "email" },
          { type: "password" },
        ]}
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
      </AmplifyAuthenticator>
  );
}

export default AuthStateApp;