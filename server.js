const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const cors = require("cors");

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
}
);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
    }
);