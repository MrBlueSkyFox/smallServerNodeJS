var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var onlineRouter = require("./routes/online");
var authRouter = require("./routes/auth");
var connectRouter = require("./routes/connect");
var pendingRouter = require("./routes/pending");
var app = express();
data = require("./data-online");
pending = require("./data-pending");
checkIfTimeIsOut = require("./helper/updateData");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/online", onlineRouter);
app.use("/auth", authRouter);
app.use("/connect", connectRouter);
app.use("/pending", pendingRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
setInterval(checkIfTimeIsOut, 60000, data);
setInterval(checkIfTimeIsOut, 60000 / 10, pending);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
