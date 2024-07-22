const express = require("express");
const { sendNotification } = require("../controllers/notificationController");

const router = express.Router();

router.post("/sendnotification", sendNotification);

module.exports = router;
