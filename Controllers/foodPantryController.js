const foodPantryModel = require('../Models/foodPantryModel.js');

const getAllFoodPantries = async (req, res) => {
    try {
    //   const boards = await boardModel.getAllBoards(filter, orderBy);
      const restaurants = await restaurantModel.getAllRestaurants();
      res.status(200).json(restaurants);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await restaurantModel.getRestaurantById(req.params.id);
        if (restaurant) {
            res.status(200).json(restaurant);
        } 
        else {
            res.status(404).json({ error: "Restaurant not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createRestaurant = async (req, res) => {
    try {
        const newRestaurant = await restaurantModel.createRestaurant(req.body);
        res.status(201).json(newRestaurant);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const updateRestaurant = async (req, res) => {
    try {
        const updateRestaurant = await restaurantModel.updateRestaurant(req.params.id, req.body);
        if (updateRestaurant) {
            res.status(200).json(updateRestaurant);
        }
        else {
            res.status(404).json({ error: "Restaurant not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteRestaurant = async (req, res) => {
    try {
        const deleteRestaurant = await restaurantModel.deleteRestaurant(req.params.id);
        if (deleteRestaurant) {
            res.status(200).json(deleteRestaurant);
        }
        else {
            res.status(404).json({ error: "Restaurant not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant
};