const restaurantModel = require('../Models/restaurantModel.js');
const bcrypt = require("bcrypt");
const e = require('express');
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

const getRestaurantByUsername = async (req, res) => {
    try {
        const restaurant = await restaurantModel.getRestaurantByUsername(req.params.username);
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
      res.status(400).json({ error: "User register error, maybe the user exists" });
    }
};

const updateRestaurant = async (req, res) => {
    try {

        // dynamically check if the req.body.name is null? Get getRestaurantById and get the name
        if(req.body.name == null) {
            const tempRestaurant = await restaurantModel.getRestaurantById(req.params.id);
            const restaurantName = tempRestaurant.name;

            const reqBody = req.body
            reqBody.name = restaurantName

            const updateRestaurant = await restaurantModel.updateRestaurant(req.params.id, req.body);
        if (updateRestaurant) {
            res.status(200).json(updateRestaurant);
        }
        else {
            res.status(404).json({ error: "Restaurant not found" });
        }

        }
        else {
        const updateRestaurant = await restaurantModel.updateRestaurant(req.params.id, req.body);
        if (updateRestaurant) {
            res.status(200).json(updateRestaurant);
        }
        else {
            res.status(404).json({ error: "Restaurant not found" });
        }
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

const addListing = async (req, res) => {
    try {
        console.log(req.body)
      const listing = await restaurantModel.addListing(req.params.restaurant_id, req.body);
      res.json(listing);
    } 
    catch (error) {
      console.error("Error adding listing:", error);
      res.status(500).json({ error: "Internal server error" });
    }
};

const deleteListing = async (req, res) => {
    try {
      const listing = await restaurantModel.deleteListing(req.params.listing_id);
      res.json(listing);
    } 
    catch (error) {
      console.error("Error deleting listing:", error);
      res.status(500).json({ error: "Internal server error" });
    }
};

// checks the info that a restaurant user gives to log in
const loginRestaurant = async (req, res) => {
    console.log(req.body);
    const {username, password} = req.body;

    
    // looks for the username entered by the restaurant in the restaurant schema
    const restaurant = await restaurantModel.getRestaurantByUsername(username);
    
    // if the restaurant is found and the password they entered is correct
    // token is output
    if (restaurant && (await bcrypt.compare(password, restaurant.password))) {
        const token = jwt.sign( // as a token encode id and username and respond to client
            {restaurantId: restaurant.id, resturantUserName: restaurant.username},
            "SECRET KEY"
        );
        res.status(200).json({token});
    }
    else {
        res.status(401).json({error: "Invalid Credentials"});
    }
};

module.exports = {
    getAllRestaurants,
    getRestaurantById,
    getRestaurantByUsername,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
    addListing,
    deleteListing,
    loginRestaurant
};