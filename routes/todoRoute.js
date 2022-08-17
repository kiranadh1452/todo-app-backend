// handle routing for todo

// require express and create a router
const express = require("express");
const {
    addTodo,
    deleteTodo,
    getTodo,
    patchTodo,
} = require("../controllers/todo/todoController");

const router = express.Router();

// handles todo related stuffs
router.get("/", getTodo);
router.post("/", addTodo);
router.patch("/", patchTodo);
router.delete("/", deleteTodo);

module.exports = router;
