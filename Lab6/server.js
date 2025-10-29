const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const todoRoutes = require("./routes/todos");

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ DB Connection Error:", err));

app.use(logger);
app.use("/todos", todoRoutes);
app.use(errorHandler);

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
