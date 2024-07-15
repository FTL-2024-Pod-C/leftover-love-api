const restaurantModel = require('../Models/restaurantModel.js');

const getAllRestaurants = async (req, res) => {
    // let {category, sort, order} = req.query;
    let {category} = req.query;
    let filter = {};
    // let orderBy = {};

    if (category) {
      filter.category = category;
    }

    // if (!order) {
    //   order = 'desc';
    // }

    // if (sort === 'price') {
    //   orderBy = {price: order};
    // }

    // if (sort === 'name') {
    //   orderBy = {name: order};
    // }
  
    try {
    //   const boards = await boardModel.getAllBoards(filter, orderBy);
      const restaurants = await restaurantModel.getAllRestaurants(filter);
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