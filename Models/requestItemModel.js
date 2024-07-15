const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all the boards or gets the boards by a specific category
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
        data: requestItemsData 
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


module.exports = {
    getAllRequestItems,
    getRequestItemById,
    createRequestItem,
    updateRequestItem,
    deleteRequestItem
};