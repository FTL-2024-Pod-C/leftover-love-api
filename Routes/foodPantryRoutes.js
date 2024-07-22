const express = require("express");
const router = express.Router();
const foodPantryController = require("../Controllers/foodPantryController");

router.get("/", foodPantryController.getAllFoodPantries);

router.get("/:id", foodPantryController.getFoodPantryById);

router.get("/foodpantryusername/:username", foodPantryController.getFoodPantryByUsername);

// route for when a food pantry wants to log onto website
// where authentication will occur
router.post("/foodpantrylogin", foodPantryController.loginFoodPantry);

router.post("/", foodPantryController.createFoodPantry);

router.put("/:id", foodPantryController.updateFoodPantry);

router.delete("/:id", foodPantryController.deleteFoodPantry);

module.exports = router;