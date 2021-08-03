import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";


// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
  domain="saleem-ux.us.auth0.com"
  clientId="Gd1wCq7NtpIk9xezjNVwzaG8qpI88WEv"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);