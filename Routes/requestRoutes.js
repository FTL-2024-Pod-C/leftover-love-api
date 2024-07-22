const express = require("express");
const router = express.Router();
const requestController = require("../Controllers/requestController");

router.get("/", requestController.getAllRequests);

router.get("/:id", requestController.getRequestById);

router.get("/foodpantry/:id", requestController.getRequestsByFoodPantryId);

router.post("/", requestController.createRequest);
router.post("/:id/requestitems", requestController.addItemToRequest);

router.put("/:id", requestController.updateRequest);

router.delete("/:id", requestController.deleteRequest);
router.delete("/:id/requestitems/:id", requestController.deleteItemFromRequest);

module.exports = router;