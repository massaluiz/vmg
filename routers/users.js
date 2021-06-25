const express = require("express");
const router = express.Router();
const UsersController = require('../controllers/Users');

router.get("/", UsersController.readAll);

router.get("/:id", UsersController.readById);

router.post("/", UsersController.create);

router.put("/:id", UsersController.update);

router.delete("/:id", UsersController.delete);

module.exports = router;
