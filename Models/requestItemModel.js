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
    requestItemData.map(async (item) => {
        const listing = await prisma.listing.findUnique({where: {id: parseInt(item.listing_id)}});
        console.log(listing);
        await prisma.listing.update({
            where: {id: parseInt(item.listing_id)},
            data: {
                quantity: parseInt(listing.quantity) - parseInt(item.quantity)
            }
        })
    })
    
    return prisma.requestItem.createMany({
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