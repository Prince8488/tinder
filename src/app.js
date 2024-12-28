const express = require("express");

const app = express();

app.use((req, res) => {
  res.send("Hey, 6yrs+ node developer, learn how to create a server in NodeJS");
});

app.listen(4200, () => console.log("listening on 4200"));
