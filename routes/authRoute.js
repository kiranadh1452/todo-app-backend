// handles authentication

// required controllers
const {
    tokenValidator,
    tokenGenerator,
} = require("../controllers/auth/authenticationController");
const { login } = require("../controllers/user/userController");

// require express and create a router
const express = require("express");
const router = express.Router();

// handle authentication and related stuffs
router.post("/login", tokenValidator, login);
router.post("/getToken", tokenGenerator);

module.exports = router;
