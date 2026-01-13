const express = require("express");
const store = require("./store");

const app = express();
app.use(express.json());

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body, { partial = false } = {}) {
