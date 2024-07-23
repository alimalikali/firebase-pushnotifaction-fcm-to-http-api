const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const SERVICE_ACCOUNT_PATH = path.join(
  __dirname,
  "../service.json"
);

let serviceAccount;
try {
  serviceAccount = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_PATH, "utf-8"));
} catch (err) {
  console.error("Error reading service account file:", err);
  process.exit(1); // Exit if the file cannot be read
}

const oauth2Client = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  ["https://www.googleapis.com/auth/firebase.messaging"],
  null
);

const getAccessToken = async () => {
  const { token } = await oauth2Client.getAccessToken();
  return token;
};

module.exports = { getAccessToken, serviceAccount };


// const SERVICE_ACCOUNT_FILE = "./pushnotification-ccb8e-firebase-adminsdk-1iro8-c82065694c.json";
// const serviceAccount = JSON.parse(fs.readFileSync(SERVICE_ACCOUNT_FILE));

// const clientAuth = new JWT({
//   email: serviceAccount.client_email,
//   key: serviceAccount.private_key,
//   scopes: ['https://www.googleapis.com/auth/firebase.messaging']
// });

// async function getAccessToken() {
//   const tokens = await clientAuth.authorize();
//   return tokens.access_token;
// }

