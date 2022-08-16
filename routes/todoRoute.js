// handle routing for todo

// require express and create a router
const express = require("express");
const router = express.Router();

// handles todo related stuffs
router.get("/", (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: "All todo retrieved successfully",
    });
});

router.post("/", (req, res, next) => {
    res.status(201).json({
        status: "success",
        message: "Single Todo created successfully",
    });
});

module.exports = router;
