const express = require("express");
const router = express.Router();
const listingController = require("../Controllers/listingController");

router.get("/", listingController.getAllListings);

router.get("/:id", listingController.getListingById);

router.get("/restaurant/:id", listingController.getListingsByRestaurantId);

router.post("/", listingController.createListing);

router.put("/:id", listingController.updateListing);

router.delete("/:id", listingController.deleteListing);

module.exports = router;