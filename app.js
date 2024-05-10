const express = require("express");
require("./db/connection")
const Student = require("./models/student");
const router = require("./db/rout.js")



const port = process.env.PORT || 5000;

// Creating an Express application
const app = express();
app.use(express.json());

app.use(router);

  app.listen(port, () => console.log('Server is running on port 5000'));