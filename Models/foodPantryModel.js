const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all the boards or gets the boards by a specific category
const getAllFoodPantries = async () => {
    return prisma.foodPantry.findMany({
        where: filter,
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

// used in food pantry log in authentication to look for the food pantry via its username
const getFoodPantryByUsername = async (username) => {
    return prisma.foodPantry.findUnique({
        where: {username},
        include: {
            requests: true,
            reviews: true
        }
    });
};

const createFoodPantry = async (name, email, username, password) => {
    return prisma.foodPantry.create({
        data: {name, email, username, password}
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
    getFoodPantryByUsername,
    createFoodPantry,
    updateFoodPantry,
    deleteFoodPantry
};