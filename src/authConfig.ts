export const msalConfig = {
  auth: {
    clientId: "your-client-id", // Replace with Application (client) ID
    authority: "https://login.microsoftonline.com/your-tenant-id", // Replace with Directory (tenant) ID
    redirectUri: "http://localhost:3000", // Your redirect URI
  },
};

export const loginRequest = {
  scopes: ["User.Read"], // Define scopes as needed
};
