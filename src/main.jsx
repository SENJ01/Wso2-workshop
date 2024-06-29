import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from '@asgardeo/auth-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider
      config={{
        signInRedirectURL: "http://localhost:5175/",
        signOutRedirectURL: "http://localhost:5175/",
        clientID: "y6HHJwyxae49gwFsfHpcpafzX9Ua",
        baseUrl: "https://api.asgardeo.io/t/anjanadep",
        scope: ["openid", "profile"]
      }}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
