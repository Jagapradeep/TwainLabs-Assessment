const express = require("express");
const app = express();
const mongoose = require("mongoose");
const debugStartup = require('debug')('IMDb:startup');
const debugDb = require('debug')('IMDb:Db');
const users = require("./routes/users");
const politicians = require("./routes/politicians");
const politicalParties = require("./routes/politicalParties");
const works = require("./routes/works");
const politicianRatings = require("./routes/politicianRatings");
const politicalPartyRatings = require("./routes/politicalPartyRatings");
const workRatings = require("./routes/workRatings");

mongoose
  .connect("mongodb://localhost/IMDb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    })
  .then(() => {
    debugDb("Connected Successfully To mongodb");
  })
  .catch((e) => {
    debugDb(e);
  });

app.use(express.json());

app.use("/users",users);
app.use("/politicians",politicians);
app.use("/politicalParties",politicalParties);
app.use("/works",works);
app.use("/politicians/ratings",politicianRatings);
app.use("/politicalParties/ratings",politicalPartyRatings);
app.use("/politicalParties/works/ratings",workRatings);

const port = process.env.PORT || 3000;
app.listen(port,() => debugStartup(`Listening on port ${port}`));