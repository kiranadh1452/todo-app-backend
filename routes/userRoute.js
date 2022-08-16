// handle user related routes

// require express and create a router
const express = require("express");
const router = express.Router();

router.post("signup", (req, res, next) => {
    res.status(201).json({
        status: "success",
        message: "User created successfully",
    });
});

router.post("/reset-password", (req, res, next) => {
    res.status(201).json({
        status: "success",
        message: "Password reset successfully",
    });
});

module.exports = router;
