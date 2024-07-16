const express = require("express");
const router = express.Router();
const reviewController = require("../Controllers/reviewController");

router.get("/", reviewController.getAllReviews);

router.get("/:id", reviewController.getReviewById);

router.get("/restaurant/:id", reviewController.getReviewsByRestaurantId);

router.post("/", reviewController.createReview);

router.put("/:id", reviewController.updateReview);

router.delete("/:id", reviewController.deleteReview);

module.exports = router;