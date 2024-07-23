
const express = require("express");
const bodyParser = require("body-parser");
const notificationRoutes = require("./routes/notifications");


const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/api/notifications", notificationRoutes);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


