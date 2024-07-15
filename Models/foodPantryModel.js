const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all the boards or gets the boards by a specific category
const getAllFoodPantries = async () => {
    return prisma.foodpantry.findMany({
        include:{
            requests: true,
            reviews: true
        }
    });
};


const getFoodPantryById = async (id) => {
    return prisma.foodpantry.findUnique({
        where: {id: parseInt(id)},
        include:{
            requests: true,
            reviews: true
        }
    });
};

const createFoodPantry = async (foodPantryData) => {
    return prisma.foodpantry.create({
        data: foodPantryData 
    });
};

const updateFoodPantry = async (id, foodPantryData) => {
    return prisma.foodpantry.update({
        where: {id: parseInt(id)},
        data: foodPantryData
    });
};

const deleteFoodPantry = async (id) => {
    return prisma.foodpantry.delete({
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