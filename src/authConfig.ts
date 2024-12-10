export const msalConfig = {
  auth: {
    clientId: "bbeeccfc-82e1-48b8-9767-b53847c74f81", // Replace with Application (client) ID
    authority: "https://login.microsoftonline.com/d82742c9-4dd4-4162-a3ef-7727c0d9d588", // Replace with Directory (tenant) ID
    redirectUri: "https://orange-water-08e37d710.4.azurestaticapps.net", // Your redirect URI
  },
};

export const loginRequest = {
  scopes: ["User.Read"], // Define scopes as needed
};
