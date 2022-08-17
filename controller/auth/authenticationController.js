// controller for authentication

const tokenValidator = async (req, res, next) => {
    // some code to validate the token
};

const tokenGenerator = async (req, res, next) => {
    // some code to generate the token
};

module.exports = {
    tokenValidator,
    tokenGenerator,
};
