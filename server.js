const express = require('express');
const cors = require("cors");
const restaurantRoutes = require("./Routes/restaurantRoutes");
const foodPantryRoutes = require("./Routes/foodPantryRoutes");
const listingRoutes = require("./Routes/listingRoutes");
const requestRoutes = require("./Routes/requestRoutes");
const requestItemRoutes = require("./Routes/requestItemRoutes");
const reviewRoutes = require("./Routes/reviewRoutes");
require("dotenv").config()

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hi from the backend!");
});

app.use("/restaurants", restaurantRoutes);
app.use("/foodpantries", foodPantryRoutes);
app.use("/listings", listingRoutes);
app.use("/requests", requestRoutes);
app.use("/requestitems", requestItemRoutes);
app.use("/reviews", reviewRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});