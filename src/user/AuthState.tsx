import React from 'react';
import MainRouter from '../main/MainRouter'
import UserInterface from './UserInterface'

import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import { getUserData } from './UserAPIs';

Amplify.configure(awsconfig);

const AuthStateApp: React.FunctionComponent = () => {
    const [authState, setAuthState] = React.useState<AuthState>();
    const [user, setUser] = React.useState<object | undefined>();
    // const [cognitoUser, setCognitoUser] = React.useState<object | undefined>();

    React.useEffect(() => {
        onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            if (authData && 'attributes' in authData){
              createUser(authData)
            } else {
              console.log("No auth data found")
            }
        });
    }, []);

    const createUser = (authData:any) => {
        console.log(authData)
        getUserData(authData.attributes.sub)
        .then( (user) => {
            console.log(user)
            const newUser:UserInterface = {
                id:user.id,
                name:user.name,
                email:user.email,
                image:user.alignedImage,
                matches:user.matches
            }
            setUser(newUser)
        })
        .catch( (err) => {
            console.log("User data could not be retrieved. Error: ", err)
        })
        
    }

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