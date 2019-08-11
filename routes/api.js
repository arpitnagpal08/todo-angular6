require('dotenv').config();

const express = require('express');
const router = express.Router();
const utils = require("../utils/commons");
const services = require("../services/api");

// TODO: Add Body Validate Middleware (JOI)

router.post("/login", services.LOGIN);
router.post("/register", services.REGISTER);

router.post("/profile", utils.verifyToken, services.PROFILE);

module.exports = router;