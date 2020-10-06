const express = require("express");
const helmet = require("helmet");

const db = require("./data/dbHelpers");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  db.get()
    .then((cars) => {
      res.status(200).json({ hello: "and welcome", data: cars });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

server.post("/addVehicle", (req, res) => {
  db.insert(req.body)
    .then((success) => {
      res.status(201).json({ success });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`API is running on ${PORT}`));
