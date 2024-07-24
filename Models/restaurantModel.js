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

// used in restaurant log in authentication to look for the restaurant via its username
const getRestaurantByUsername = async (username) => {
    return prisma.restaurant.findUnique({
        where: {username},
        include: {
            listings: true,
            reviews: true
        }
    });
};

const createRestaurant = async (name, email, username, password) => {
    return prisma.restaurant.create({
        data: {name, email, username, password}
    });
};

// const updateRestaurant = async (id, restaurantData) => {
//     return prisma.restaurant.update({
//         where: {id: parseInt(id)},
//         data: restaurantData
//     });
// };
const updateRestaurant = async (id, {name, location, description, email, phone_number}) => {
  try {
    const existingRestaurant = await prisma.restaurant.findUnique({
      where: { id: Number(id) },
        include: {
            id: false
        
      }
    });

    if (!existingRestaurant) {
      throw new Error(`Restaurant with id ${id} not found`);
    }

    const updatedRestaurant = await prisma.restaurant.update({
      where: { id: Number(id) },
      data: {
         ...existingRestaurant, // Spread existing data
        // ...data, // Spread new data
        name,
        location,
        description,
        email,
        phone_number
      },
    });

    return updatedRestaurant;
  } catch (error) {
    throw new Error(`Failed to update restaurant: ${error.message}`);
  }
};

  

const deleteRestaurant = async (id) => {
    return prisma.restaurant.delete({
        where: {id: parseInt(id)}
    });
};

const addListing = async (restaurantId, listingData) => {
    return prisma.listing.create({ 
        data: { 
            restaurant_id: parseInt(restaurantId),
            name: listingData.name,
            description: listingData.description,
            quantity: listingData.quantity,
            unit: listingData.unit,
            expiration_date: listingData.expiration_date,
            category: listingData.category
        } 
    });
}

const deleteListing = async (listingId) => {
    return prisma.listing.delete({ 
        where: {id: parseInt(listingId)}
    });
}


module.exports = {
    getAllRestaurants,
    getRestaurantById,
    getRestaurantByUsername,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
    addListing,
    deleteListing
};