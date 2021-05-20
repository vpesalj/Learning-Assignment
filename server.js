const express = require("express");
const teamRouter = require("./app/routes/TeamRoutes");
const userRouter = require("./app/routes/UserRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/teams", teamRouter);
app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status(status).send(err);
  next(err);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000.`);
});

module.exports = app;
