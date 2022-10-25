const getUserController = (req, res, next) => {
    res.send({ message: "User feched successfully" });
};

module.exports = { getUserController };
