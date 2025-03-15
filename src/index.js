const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

// setup the ability to see into response bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup the express assets path
app.use("/", express.static(path.join(__dirname, "../client")));

// API calls ------------------------------------------------------------------------------------
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "./client/pages/user.html"));
});

app.get("/users", async (req, res) => {
  // Write your logic here
  try {
    const response = await fetch("https://dummyjson.com/users");
    if (!response.ok) {
      throw new Error(
        `Network response was not OK (status ${response.status})`
      );
    }
    const users = await response.json();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
