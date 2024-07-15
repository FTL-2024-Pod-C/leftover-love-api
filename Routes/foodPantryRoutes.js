const express = require("express");
const router = express.Router();
const foodPantryController = require("../Controllers/foodPantryController");

router.get("/", foodPantryController.getAllFoodPantries);

router.get("/:id", foodPantryController.getFoodPantryById);

router.post("/", foodPantryController.createFoodPantry);

router.put("/:id", foodPantryController.updateFoodPantry);

router.delete("/:id", foodPantryController.deleteFoodPantry);

module.exports = router;