const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connection");
require("dotenv").config();
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");

//Middlewares
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

//If there is a PORT environment variable use it, otherwise use port 3000
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Listeting on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
