const express = require("express");
const app = express();
require("dotenv").config({ path: './config.env' });

const cors = require("cors");
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());


app.use(require('./routes/taskRoutes'))
// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
  
    });
    console.log(`Server is running on port: ${port}`);
  });