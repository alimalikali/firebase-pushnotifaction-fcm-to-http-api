const axios = require("axios");
const FCM_SERVER_KEY =
  "AAAARjQJGfc:APA91bFCYUEE3kvB0CxA3Y27cm32JLN2pXMKUVq7Edb49zyQFDovglkxmMonwuGvGhA9oZ3nqbrVETGgvPHAikB__19dz9O84Bn38UN4Wu1J4v9CdxCT9NXqaM1-rZCM_icBR-wPMHFU";



const sendNotification = async (req, res) => {
  console.log("Request body:", req.body);

  const { token, notification, data } = req.body.message;

  if (!token || !notification || !data) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const message = {
    message: {
      token: token, // Device token
      notification: {
        title: notification.title,
        body: notification.body,
      },
      data: data,
    },
  };

  try {
    console.log("Sending message:", message);

    const response = await axios.post(
      `https://fcm.googleapis.com/v1/projects/listah-ae13c/messages:send`,
      message,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${FCM_SERVER_KEY}`,
        },
      }
    );

    res.status(200).json({ messageId: response.data.name });
  } catch (error) {
    console.error("Error sending message:", error.message);
    res
      .status(error.response?.status || 500)
      .json({ error: error.response?.data || error.message });
  }
};

module.exports = { sendNotification };



