const express = require("express");

const router = express.Router();

const authController = require("./controller");

router.post("/sign-in", authController.signin);
router.post("/sign-up", authController.signup);
router.post("/reset-password", authController.resetPassword);
router.post("/change-password", authController.changePassword);

module.exports = router;
