const express = require("express");
const inventoryRoutes = require("./inventory/routes");

const app = express();
const port = 3000;

app.use(express.json());

const cors = require("cors");

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
}
);

// API Route
// http://localhost:3000/inventory
app.use("/api/v1/inventory", inventoryRoutes);


app.listen(port, () => {
    console.log(`Running on port ${port}`);
    }
);