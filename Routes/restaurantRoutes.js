const express = require("express");
const router = express.Router();
const restaurantController = require("../Controllers/restaurantController");

router.get("/", restaurantController.getAllRestaurants);

router.get("/:id", restaurantController.getRestaurantById);

router.get("/restaurantusername/:username", restaurantController.getRestaurantByUsername);

// route for when a restaurant wants to log onto website
// where authentication will occur
router.post("/restaurantlogin", restaurantController.loginRestaurant);

router.post("/", restaurantController.createRestaurant);

router.put("/:id", restaurantController.updateRestaurant);

router.delete("/:id", restaurantController.deleteRestaurant);

module.exports = router;