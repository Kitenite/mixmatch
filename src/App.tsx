import React from 'react';
import './App.css';
import MainRouter from './main/MainRouter'
import { AuthenticatorWrapper } from "aws-amplify-react";

function App() {
  return (
    <AuthenticatorWrapper>
      <MainRouter/>
    </AuthenticatorWrapper>
  );
}
export default App