const express = require('express');
const cors = require("cors");
require("dotenv").config()

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hi from the backend!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});