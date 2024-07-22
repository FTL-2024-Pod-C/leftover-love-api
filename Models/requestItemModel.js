const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllRequestItems = async () => {
    return prisma.requestItem.findMany({

    });
};


const getRequestItemById = async (id) => {
    return prisma.requestItem.findUnique({
        where: {id: parseInt(id)},
    });
};

const createRequestItem = async (requestItemData) => {
    return prisma.requestItem.create({
        data: requestItemData 
    });
};

const updateRequestItem = async (id, requestItemData) => {
    return prisma.requestItem.update({
        where: {id: parseInt(id)},
        data: requestItemData
    });
};

const deleteRequestItem = async (id) => {
    return prisma.requestItem.delete({
        where: {id: parseInt(id)}
    });
};

const getRequestItemsByRestaurantId = async (restaurantId) => {
    return prisma.requestItem.findMany({
        where: {listing: {restaurant_id: parseInt(restaurantId)}}
    });
};


module.exports = {
    getAllRequestItems,
    getRequestItemById,
    createRequestItem,
    updateRequestItem,
    deleteRequestItem,
    getRequestItemsByRestaurantId
};