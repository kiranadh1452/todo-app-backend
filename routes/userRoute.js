// handle user related routes

// require express and create a router
const express = require("express");
const {
    login,
    signUp,
    resetPassword,
    changePassword,
    patchProfile,
} = require("../controllers/user/userController");

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);
router.patch("/edit", patchProfile);
router.post("/reset-pw", resetPassword);
router.post("/change-pw", changePassword);

module.exports = router;
