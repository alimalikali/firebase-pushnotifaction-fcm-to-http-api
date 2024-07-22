const axios = require("axios");
const { getAccessToken, serviceAccount } = require("../config/googleConfig");

const sendNotification = async (req, res) => {
  const { token, title, body, data } = req.body;

  try {
    const accessToken = await getAccessToken();
    console.log(accessToken);

    const response = await axios.post(
      `https://fcm.googleapis.com/v1/projects/${serviceAccount.project_id}/messages:send`,
      {
        message: {
          token: token, 
          notification: {
            title: title,
            body: body,
          },
          data: data,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    console.log("Notification sent successfully:", response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error sending notification:", error.response || error.message);
    res.status(error.response?.status || 500).json({ error: error.response?.data || error.message });
  }
};

module.exports = { sendNotification };
