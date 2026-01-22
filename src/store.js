const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data.json");

function readAll() {
  if (!fs.existsSync(DATA_FILE)) return [];
