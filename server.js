// required pacakges
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

// environment variables
dotenv.config({
    path: "./config/config.env",
});
const port = process.env.PORT || 3000;

const app = express();
app.set("port", port);

// to parse JSON Objects received from the client as string to workable objects
app.use(bodyParser.json());

// for url encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/todo", todoRoute);

app.use("*", (req, res) => {
    res.status(404).json({
        status: "error",
        message: "Endpoint not found",
    });
});

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
