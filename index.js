const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

app.get("/", (req, res) => {
  res.send("200");
});

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

//

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});

pool;
