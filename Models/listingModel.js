const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all the boards or gets the boards by a specific category
const getAllListings = async () => {
    return prisma.listing.findMany({

    });
};


const getListingById = async (id) => {
    return prisma.listing.findUnique({
        where: {id: parseInt(id)},
    });
};

const createListing = async (listingData) => {
    return prisma.listing.create({
        data: listingData 
    });
};

const updateListing = async (id, listingData) => {
    return prisma.listing.update({
        where: {id: parseInt(id)},
        data: listingData
    });
};

const deleteListing = async (id) => {
    return prisma.listing.delete({
        where: {id: parseInt(id)}
    });
};


module.exports = {
    getAllListings,
    getListingById,
    createListing,
    updateListing,
    deleteListing
};