const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all the boards or gets the boards by a specific category
const getAllRequests = async () => {
    return prisma.request.findMany({

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


module.exports = {
    getAllRequests,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest
};