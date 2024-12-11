import { MsalProvider } from "@azure/msal-react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";
import ErrorBoundary from "./components/Error";
import React from "react";
import './styles/App.css'
import './styles/bootstrap.css'
const msalInstance = new PublicClientApplication(msalConfig);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </ErrorBoundary>
  </React.StrictMode>
  ,
);
