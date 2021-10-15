require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => res.send({ health: "OK" }));

app.listen(port, () => console.log(`server running on port - ${port}`));
