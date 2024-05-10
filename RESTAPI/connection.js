const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/firstdb", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection to MongoDB successful");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
