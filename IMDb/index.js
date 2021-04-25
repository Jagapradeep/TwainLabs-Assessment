const express = require("express");
const app = express();
const mongoose = require("mongoose");
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
    console.log(" -info: Connected Successfully To mongodb");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());

app.use("/users",users);
app.use("/politicians",politicians);
app.use("/politicalParties",politicalParties);
app.use("/works",works);
app.use("/politicians/ratings",politicianRatings);
app.use("/politicalParties/ratings",politicalPartyRatings);
app.use("/politicians/works/ratings",workRatings);
require('./startup/prod')(app);

const port = process.env.PORT || 3000;
app.listen(port,() => console.log(` -info: Listening on port ${port}`));