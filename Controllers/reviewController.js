const reviewModel = require('../Models/reviewModel.js');

const getAllReviews = async (req, res) => {
  
    try {
      const reviews = await reviewModel.getAllReviews();
      res.status(200).json(reviews);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const getReviewById = async (req, res) => {
    try {
        const review = await reviewModel.getReviewById(req.params.id);
        if (review) {
            res.status(200).json(review);
        } 
        else {
            res.status(404).json({ error: "Review not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createReview = async (req, res) => {
    try {
        const newReview = await reviewModel.createReview(req.body);
        res.status(201).json(newReview);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const updateReview = async (req, res) => {
    try {
        const updateReview = await reviewModel.updateReview(req.params.id, req.body);
        if (updateReview) {
            res.status(200).json(updateReview);
        }
        else {
            res.status(404).json({ error: "Review not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteReview = async (req, res) => {
    try {
        const deleteReview = await reviewModel.deleteReview(req.params.id);
        if (deleteReview) {
            res.status(200).json(deleteReview);
        }
        else {
            res.status(404).json({ error: "Review not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
};