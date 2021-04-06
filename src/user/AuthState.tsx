import React from 'react';
import MainRouter from '../main/MainRouter'
import UserInterface from './UserInterface'

import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import { getUserData } from './GraphOperations';
import { UserContext } from './UserContext';

Amplify.configure(awsconfig);

const AuthStateApp: React.FunctionComponent = () => {
    const [authState, setAuthState] = React.useState<AuthState>();
    const [user, setUser] = React.useState<object | undefined>();
    const value = { user, setUser };
    // const [cognitoUser, setCognitoUser] = React.useState<object | undefined>();

    React.useEffect(() => {
        onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            if (authData && 'attributes' in authData){
              modelUser(authData)
            } else {
              console.log("No auth data found")
            }
        });
    }, []);

    const modelUser = (authData:any) => {
        console.log(authData)
        getUserData(authData.attributes.sub)
        .then( (user:any) => {
            const newUser:UserInterface = {
                id:user.id,
                name:user.name,
                email:user.email,
                image:user.alignedImage,
                matches:user.matches.items
            }
            setUser(newUser)
        })
        .catch( (err:any) => {
            console.log("User data could not be retrieved. Error: ", err)
        })
        
    }

  return authState === AuthState.SignedIn && user ? (
    <UserContext.Provider value={value}>
        <MainRouter >
            <AmplifySignOut />
        </MainRouter>
    </UserContext.Provider>
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