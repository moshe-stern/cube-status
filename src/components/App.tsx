import React, { useState } from "react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig, loginRequest } from "../authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

const App: React.FC = () => {
  const [userInfo, setUserInfo] = useState(null);

  const handleLogin = async () => {
    try {
      await msalInstance.initialize()
      const response = await msalInstance.loginPopup(loginRequest);
      const accessToken = response.accessToken;
      console.log(accessToken)
      // Fetch user info from Microsoft Graph
      const graphResponse = await fetch("https://graph.microsoft.com/v1.0/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await graphResponse.json();
      setUserInfo(data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <h1>Microsoft Sign-In Integration</h1>
      {userInfo ? (
        <div>
          <p>Welcome, { userInfo}</p>
        </div>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
    </div>
  );
};

export default App;
