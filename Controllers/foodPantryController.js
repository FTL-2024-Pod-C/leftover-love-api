const foodPantryModel = require('../Models/foodPantryModel.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllFoodPantries = async (req, res) => {

    let {category} = req.query
    let filter = {};
    if (category) {
        filter.category = category;
    }

    try {
    //   const boards = await boardModel.getAllBoards(filter, orderBy);
      const foodPantries = await foodPantryModel.getAllFoodPantries(filter);
      res.status(200).json(foodPantries);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const getFoodPantryById = async (req, res) => {
    try {
        const foodPantry = await foodPantryModel.getFoodPantryById(req.params.id);
        if (foodPantry) {
            res.status(200).json(foodPantry);
        } 
        else {
            res.status(404).json({ error: "Food Pantry not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getFoodPantryByUsername = async (req, res) => {
    try {
        const foodPantry = await foodPantryModel.getFoodPantryByUsername(req.params.username);
        if (foodPantry) {
            res.status(200).json(foodPantry);
        } 
        else {
            res.status(404).json({ error: "Food Pantry not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// a food pantry registers on our website
const createFoodPantry = async (req, res) => {
    const {name, email, username, password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newFoodPantry = await foodPantryModel.createFoodPantry(name, email, username, hashedPassword);
        res.status(201).json(newFoodPantry);
    } 
    catch (error) {
      res.status(400).json({ error: "User register error, maybe the user exists"});
    }
};

const updateFoodPantry = async (req, res) => {
    try {
        const updateFoodPantry = await foodPantryModel.updateFoodPantry(req.params.id, req.body);
        if (updateFoodPantry) {
            res.status(200).json(updateFoodPantry);
        }
        else {
            res.status(404).json({ error: "Food Pantry not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteFoodPantry = async (req, res) => {
    try {
        const deleteFoodPantry = await foodPantryModel.deleteFoodPantry(req.params.id);
        if (deleteFoodPantry) {
            res.status(200).json(deleteFoodPantry);
        }
        else {
            res.status(404).json({ error: "Food Pantry not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// checks the info that a food pantry user gives to log in
const loginFoodPantry = async (req, res) => {
    const {username, password} = req.body;
    
    // looks for the username entered by the food pantry in the food pantry schema
    const foodPantry = await foodPantryModel.getFoodPantryByUsername(username);
    console.log(foodPantry);
    console.log()
    
    // if the food pantry is found and the password they entered is correct
    // token is output
    if (foodPantry && (await bcrypt.compare(password, foodPantry.password))) {
        const token = jwt.sign( // as a token encode id and username and respond to client
            {foodPantryId: foodPantry.id, foodPantryUserName: foodPantry.username},
            "SECRET KEY"
        );
        res.status(200).json({token});
    }
    else {
        res.status(401).json({error: "Invalid Credentials"});
    }
};

module.exports = {
    getAllFoodPantries,
    getFoodPantryById,
    getFoodPantryByUsername,
    createFoodPantry,
    updateFoodPantry,
    deleteFoodPantry,
    loginFoodPantry
};