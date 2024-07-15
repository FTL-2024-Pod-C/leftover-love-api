const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all the boards or gets the boards by a specific category
const getAllRestaurants = async (filter = {}, orderBy = {}) => {
    return prisma.restaurant.findMany({
        where: filter,
        orderBy: orderBy,
        include:{
            listings: true,
            reviews: true
        }
    });
};


const getRestaurantById = async (id) => {
    return prisma.restaurant.findUnique({
        where: {id: parseInt(id)},
        include:{
            listings: true,
            reviews: true
        }
    });
};

const createRestaurant = async (restaurantData) => {
    return prisma.restaurant.create({
        data: restaurantData 
    });
};

const updateRestaurant = async (id, restaurantData) => {
    return prisma.restaurant.update({
        where: {id: parseInt(id)},
        data: restaurantData
    });
};

const deleteRestaurant = async (id) => {
    return prisma.restaurant.delete({
        where: {id: parseInt(id)}
    });
};


module.exports = {
    getAllRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
};