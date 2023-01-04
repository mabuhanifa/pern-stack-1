const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

app.post("/todos", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.error(error);
  }
});

//

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});

pool;
