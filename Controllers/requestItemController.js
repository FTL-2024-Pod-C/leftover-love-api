const requestItemModel = require('../Models/requestItemModel.js');

const getAllRequestItems = async (req, res) => {
  
    try {
      const requestItems = await requestItemModel.getAllRequestItems();
      res.status(200).json(requestItems);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const getRequestItemById = async (req, res) => {
    try {
        const requestItem = await requestItemModel.getRequestItemById(req.params.id);
        if (requestItem) {
            res.status(200).json(requestItem);
        } 
        else {
            res.status(404).json({ error: "Request Item not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createRequestItem = async (req, res) => {
    try {
        const newRequestItem = await requestItemModel.createRequestItem(req.body);
        res.status(201).json(newRequestItem);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const updateRequestItem = async (req, res) => {
    try {
        const updateRequestItem = await requestItemModel.updateRequestItem(req.params.id, req.body);
        if (updateRequestItem) {
            res.status(200).json(updateRequestItem);
        }
        else {
            res.status(404).json({ error: "Request Item not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteRequestItem = async (req, res) => {
    try {
        const deleteRequestItem = await requestItemModel.deleteRequestItem(req.params.id);
        if (deleteRequestItem) {
            res.status(200).json(deleteRequestItem);
        }
        else {
            res.status(404).json({ error: "Request Item not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllRequestItems,
    getRequestItemById,
    createRequestItem,
    updateRequestItem,
    deleteRequestItem
};