const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

const SERVICE_ACCOUNT_PATH = path.join(
  __dirname,
  "../pushnotification-ccb8e-firebase-adminsdk-1iro8-c82065694c.json"
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
