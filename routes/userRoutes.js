const express = require("express");
const router = express.Router();

const { getUserMiddleware, addUserMiddleware } = require("../middlewares/userMiddleware");
const { getUserController, addUserController } = require("../controllers/userController");

router.get("/", getUserMiddleware, getUserController);
router.post("/createUser", addUserMiddleware, addUserController)

module.exports = router;
