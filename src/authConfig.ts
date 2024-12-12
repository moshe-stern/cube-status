export const msalConfig = {
  auth: {
    clientId: "bbeeccfc-82e1-48b8-9767-b53847c74f81",
    authority:
      "https://login.microsoftonline.com/d82742c9-4dd4-4162-a3ef-7727c0d9d588",
    redirectUri: "https://status.attainaba.com",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
