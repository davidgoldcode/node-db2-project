const dbConfig = require("./connection.js");

module.exports = {
  insert,
  get,
};

function get() {
  return dbConfig("cars");
}

function insert(details) {
  return dbConfig("cars").insert(details);
}
