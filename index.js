require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => res.status(200).send({ health: "OK" }));

app.listen(() => console.log(`server running on port - ${port}`));
