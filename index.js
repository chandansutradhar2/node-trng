const express = require("express");
const app = express();
const port = 3000;

app.get("/updateMerchantEmail", (req, res) => {
  res.send("merhcant email updated");
});

app.get("/user/getUserById", (req, res) => {
  res.send(
    `<HTML><body style="background-color:blue"><h1>Current Time is : ${new Date().toLocaleTimeString()}</h1></body></HTML>`
  );
});

app.listen(port, () => {
  console.log("node app running on 3000");
});
