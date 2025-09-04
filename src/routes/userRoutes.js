const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const validate = require('../middlewares/validateMiddleware');
const { registerSchema } = require('../schemas/authSchema');

router.post("/", validate(registerSchema), userController.createUser);
router.get("/", userController.getAllUsers);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;