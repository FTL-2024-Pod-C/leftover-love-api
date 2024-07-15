const listingModel = require('../Models/listingModel.js');

const getAllListings = async (req, res) => {
  
    try {
      const listings = await listingModel.getAllListings();
      res.status(200).json(listings);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const getListingById = async (req, res) => {
    try {
        const listing = await listingModel.getListingById(req.params.id);
        if (listing) {
            res.status(200).json(listing);
        } 
        else {
            res.status(404).json({ error: "Listing not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createListing = async (req, res) => {
    try {
        const newListing = await listingModel.createListing(req.body);
        res.status(201).json(newListing);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const updateListing = async (req, res) => {
    try {
        const updateListing = await listingModel.updateListing(req.params.id, req.body);
        if (updateListing) {
            res.status(200).json(updateListing);
        }
        else {
            res.status(404).json({ error: "Listing not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteListing = async (req, res) => {
    try {
        const deleteListing = await listingModel.deleteListing(req.params.id);
        if (deleteListing) {
            res.status(200).json(deleteListing);
        }
        else {
            res.status(404).json({ error: "Listing not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllListings,
    getListingById,
    createListing,
    updateListing,
    deleteListing
};