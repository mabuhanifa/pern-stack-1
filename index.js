const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
