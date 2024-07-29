const requestModel = require('../Models/requestModel.js');

const getAllRequests = async (req, res) => {
  
    try {
      const requests = await requestModel.getAllRequests();
      res.status(200).json(requests);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const getRequestById = async (req, res) => {
    try {
        const request = await requestModel.getRequestById(req.params.id);
        if (request) {
            res.status(200).json(request);
        } 
        else {
            res.status(404).json({ error: "Request not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createRequest = async (req, res) => {
    try {
        const newRequest = await requestModel.createRequest(req.body);
        res.status(201).json(newRequest);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const updateRequest = async (req, res) => {
    try {
        const updateRequest = await requestModel.updateRequest(req.params.id, req.body);
        if (updateRequest) {
            res.status(200).json(updateRequest);
        }
        else {
            res.status(404).json({ error: "Request not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteRequest = async (req, res) => {
    try {
        const deleteRequest = await requestModel.deleteRequest(req.params.id);
        if (deleteRequest) {
            res.status(200).json(deleteRequest);
        }
        else {
            res.status(404).json({ error: "Request not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const addItemToRequest = async (req, res) => {
    try {
      const requestItem = await requestModel.addItemToRequest(req.body);
      res.json(requestItem);
    } 
    catch (error) {
      console.error("Error adding item to request:", error);
      res.status(500).json({ error: "Internal server error" });
    }
};

const deleteItemFromRequest = async (req, res) => {
    try {
      const requestItem = await requestModel.deleteItemFromRequest(req.params.id);
      res.json(requestItem);
    } 
    catch (error) {
      console.error("Error deleting item from request:", error);
      res.status(500).json({ error: "Internal server error" });
    }
};

const getRequestsByFoodPantryId = async (req, res) => {
    try {
        const requests = await requestModel.getRequestsByFoodPantryId(req.params.id);
        if (requests) {
            res.status(200).json(requests);
        }
        else {
            res.status(404).json({ error: "Requests not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};
  

module.exports = {
    getAllRequests,
    getRequestById,
    createRequest,
    updateRequest,
    deleteRequest,
    addItemToRequest,
    deleteItemFromRequest,
    getRequestsByFoodPantryId
};