const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllRequests = async () => {
    return prisma.request.findMany({
        include:{
            request_items: true
        }
    });
};


const getRequestById = async (id) => {
    return prisma.request.findUnique({
        where: {id: parseInt(id)},
    });
};

const createRequest = async (requestData) => {
    return prisma.request.create({
        data: requestData 
    });
};

const updateRequest = async (id, requestData) => {
    return prisma.request.update({
        where: {id: parseInt(id)},
        data: requestData
    });
};

const deleteRequest = async (id) => {
    return prisma.request.delete({
        where: {id: parseInt(id)}
    });
};

const addItemToRequest = async (requestItemData) => {
    
    return prisma.requestItem.createMany({ 
        data: requestItemData
    });
};

const deleteItemFromRequest = async (requestItemId) => {
    return prisma.requestItem.delete({ 
        where: {id: parseInt(requestItemId)}
    });
};

const getRequestsByFoodPantryId = async (foodPantryId) => {
    return prisma.request.findMany({
        where: {food_pantry_id: parseInt(foodPantryId)}
    });
};

module.exports = {
    getAllRequests,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest,
    addItemToRequest,
    deleteItemFromRequest,
    getRequestsByFoodPantryId
};