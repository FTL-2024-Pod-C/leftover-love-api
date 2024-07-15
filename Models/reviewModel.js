const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all the boards or gets the boards by a specific category
const getAllReviews = async () => {
    return prisma.review.findMany({
    });
};


const getReviewById = async (id) => {
    return prisma.review.findUnique({
        where: {id: parseInt(id)},
    });
};

const createReview = async (reviewData) => {
    return prisma.review.create({
        data: reviewData 
    });
};

const updateReview = async (id, reviewData) => {
    return prisma.review.update({
        where: {id: parseInt(id)},
        data: reviewData
    });
};

const deleteReview = async (id) => {
    return prisma.review.delete({
        where: {id: parseInt(id)}
    });
};


module.exports = {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
};