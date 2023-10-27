const express = require("express");
const routes = require("./routes");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});