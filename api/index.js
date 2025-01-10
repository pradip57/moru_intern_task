const http = require("http");
const app = require("./src/config/express.config");

const server = http.createServer(app);

const { config } = require("dotenv");
config();

server.listen(process.env.PORT, "0.0.0.0", (err) => {
  console.log(`Server is running at port ${process.env.PORT}`);
  console.log("Press CTRL + C to terminate the process");
});
