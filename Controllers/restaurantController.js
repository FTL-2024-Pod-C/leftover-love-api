const restaurantModel = require('../Models/restaurantModel.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllRestaurants = async (req, res) => {
    let {category} = req.query;
    let filter = {};

    if (category) {
      filter.category = category;
    }
  
    try {
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
    const {name, email, username, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newRestaurant = await restaurantModel.createRestaurant(name, email, username, hashedPassword);
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