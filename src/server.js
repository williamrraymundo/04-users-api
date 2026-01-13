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
