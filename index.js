const express = require("express");
const Knex = require("knex");

const app = express();

const port = 3000;
const knex = Knex({
  client: "mysql2",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "my-secret-pw",
    database: "messenger",
  },
});

app.get("/messages", async (req, res) => {
  const result = await knex.raw("select * from users where users.id = ?", [1]);
  const users = result[0]
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
