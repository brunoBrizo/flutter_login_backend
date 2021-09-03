const bodyParser = require("body-parser");
const http = require("http");
const app = require("./src/app");
const server = http.createServer(app);
require("dotenv").config();

server.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});
