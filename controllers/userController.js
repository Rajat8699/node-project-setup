
const { User, Employee } = require('../models/index.js')
const getUserController = (req, res, next) => {
    res.send({ message: "User feched successfully" });
};


const addUserController = async (req, res, next) => {
    const { body } = req
    try {
        let obj = { email: body.email, firstName: body.firstName, lastName: body.lastName, dob: body.dob, image: body.image }
        await User.create(obj).then(() => { res.send("User created successfully") }).catch(err => { res.send("Something went wrong") })

    }
    catch {
        res.send({ status: 500, message: "Internal server error" })
    }
};

module.exports = { getUserController, addUserController };
