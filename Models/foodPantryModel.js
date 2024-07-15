const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all the boards or gets the boards by a specific category
const getAllFoodPantries = async () => {
    return prisma.foodPantry.findMany({
        include:{
            requests: true,
            reviews: true
        }
    });
};


const getFoodPantryById = async (id) => {
    return prisma.foodPantry.findUnique({
        where: {id: parseInt(id)},
        include:{
            requests: true,
            reviews: true
        }
    });
};

const createFoodPantry = async (foodPantryData) => {
    return prisma.foodPantry.create({
        data: foodPantryData 
    });
};

const updateFoodPantry = async (id, foodPantryData) => {
    return prisma.foodPantry.update({
        where: {id: parseInt(id)},
        data: foodPantryData
    });
};

const deleteFoodPantry = async (id) => {
    return prisma.foodPantry.delete({
        where: {id: parseInt(id)}
    });
};


module.exports = {
    getAllFoodPantries,
    getFoodPantryById,
    createFoodPantry,
    updateFoodPantry,
    deleteFoodPantry
};