import { AccountInfo, InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cubes from "./cubes";

export default function App() {
  const { accounts } = useMsal();
  const [user, setUser] = useState<AccountInfo>();
  useEffect(() => {
    const handleMsal = async () => {
      if (!accounts.length) return;
      setUser(accounts[0]);
    };
    handleMsal();
  }, [accounts]);
  return (
    <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cubes user={user}></Cubes>}></Route>
        </Routes>
      </BrowserRouter>
    </MsalAuthenticationTemplate>
  );
}
