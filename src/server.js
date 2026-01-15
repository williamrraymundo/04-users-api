const express = require("express");
const store = require("./store");

const app = express();
app.use(express.json());

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body, { partial = false } = {}) {
  const errors = [];
  if (!partial || body.name !== undefined) {
    if (typeof body.name !== "string" || body.name.trim().length < 2) {
      errors.push("name must have at least 2 characters");
    }
  }
  if (!partial || body.email !== undefined) {
    if (typeof body.email !== "string" || !EMAIL_RE.test(body.email)) {
      errors.push("email is invalid");
    }
  }
  return errors;
}

app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.get("/health", (_req, res) => res.json({ status: "ok" }));

app.get("/users", (_req, res) => res.json(store.list()));

app.get("/users/:id", (req, res) => {
  const user = store.find(Number(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

app.post("/users", (req, res) => {
  const errors = validate(req.body);
  if (errors.length) return res.status(400).json({ errors });
  res.status(201).json(store.create(req.body));
});
