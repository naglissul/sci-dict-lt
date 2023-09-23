const express = require("express");
const fs = require("fs");

const app = express();
const port = 5000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.patch("/api/counters/i-was-here/inc", (req, res) => {
  let currentNumber = parseInt(fs.readFileSync("data.txt", "utf-8"));
  currentNumber++;
  fs.writeFileSync("data.txt", currentNumber.toString());
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
