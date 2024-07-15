const foodPantryModel = require('../Models/foodPantryModel.js');

const getAllFoodPantries = async (req, res) => {
    try {
    //   const boards = await boardModel.getAllBoards(filter, orderBy);
      const foodPantries = await foodPantryModel.getAllFoodPantries();
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

const createFoodPantry = async (req, res) => {
    try {
        const newFoodPantry = await foodPantryModel.createFoodPantry(req.body);
        res.status(201).json(newFoodPantry);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
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

module.exports = {
    getAllFoodPantries,
    getFoodPantryById,
    createFoodPantry,
    updateFoodPantry,
    deleteFoodPantry
};