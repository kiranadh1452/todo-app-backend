// handles authentication

// require express and create a router
const express = require("express");
const router = express.Router();

// handle authentication and related stuffs
router.post("/login", (req, res, next) => {});
router.post("/getToken", (req, res, next) => {});

module.exports = router;
