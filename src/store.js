const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "..", "data.json");

function readAll() {
  if (!fs.existsSync(DATA_FILE)) return [];
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
}

function writeAll(users) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

function nextId(users) {
  return users.reduce((max, u) => Math.max(max, u.id), 0) + 1;
}

function list() {
  return readAll();
}

function find(id) {
  return readAll().find((u) => u.id === id);
}

function create({ name, email }) {
  const users = readAll();
  const user = { id: nextId(users), name, email, createdAt: new Date().toISOString() };
  users.push(user);
  writeAll(users);
  return user;
