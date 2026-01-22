# Users API

> REST API for managing users, built with Node.js and Express.

## Features

- Full CRUD on `/users`
- Input validation with clear error messages
- JSON file persistence
- Health-check endpoint and request logging

## Tech stack

Node.js, Express

## Getting started

```bash
npm install
npm start

# Create a user
curl -X POST localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Ada","email":"ada@example.com"}'
curl localhost:3000/users
```
