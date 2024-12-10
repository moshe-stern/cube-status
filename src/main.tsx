import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig.ts";
import { MsalProvider } from "@azure/msal-react";
const msalInstance = new PublicClientApplication(msalConfig);

createRoot(document.getElementById("root")!).render(
  <MsalProvider instance={msalInstance}>
    <StrictMode>
      <App />
    </StrictMode>
  </MsalProvider>,
);
