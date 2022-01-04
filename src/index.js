const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const morgan = require("morgan");

const app = express();

// Setting
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("port", process.env.PORT || 3000);

// Middleware
app.use(morgan("dev"));

// Routes
app.use("/singin", require("./routes/singin"));
app.use("/singup", require("./routes/singup"));

// Starting the server
app.listen(app.get("port"), () => {
  console.log("Server on the port", app.get("port"));
});
