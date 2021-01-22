import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <AmplifySignOut />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

function formatName(){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName = 'Kevin',
  lastName = 'OSullivan',
};

const element = {
  <h1>{formatName(user)}</h1>
}

ReactDOM.render(element,document.getElementById('root'));




export default withAuthenticator(App);^
