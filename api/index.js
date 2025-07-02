// api/index.js
const serverless = require("serverless-http");
const express = require("express");
const app = express();

// middlewares, rutas, etc.
app.get("/", (req, res) => {
  res.send("Bienvenido a la API serverless!");
});

module.exports.handler = serverless(app);
