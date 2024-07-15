const express = require("express");
const router = express.Router();
const requestItemController = require("../Controllers/requestItemController");

router.get("/", requestItemController.getAllRequestItems);

router.get("/:id", requestItemController.getRequestItemById);

router.post("/", requestItemController.createRequestItem);

router.put("/:id", requestItemController.updateRequestItem);

router.delete("/:id", requestItemController.deleteRequestItem);

module.exports = router;