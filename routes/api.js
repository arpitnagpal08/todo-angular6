const express = require('express');
const router = express.Router();
const utils = require("../utils/commons");

router.get('/test', utils.verifyToken, (req, res) => {
  res.json("Test Route")
})


module.exports = router;