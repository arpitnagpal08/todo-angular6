let result = {
  status: 0,
  apiReference: "",
  message: "",
  data: {}
}

const jwt = require('jsonwebtoken');
const secretKey = process.env.AUTH_TOKEN_KEY;


exports.LOGIN         = LOGIN;
exports.REGISTER      = REGISTER;

exports.PROFILE       = PROFILE;


function LOGIN(req, res) {
  const { email, password } = req.body;
  
  result.status = 1;
  result.apiReference = "/user/login";
  result.message = "Login Success";
  result.data = {};

  return res.json(result)
}

function REGISTER(req, res) {
  const { name, email, password, date_of_birth } = req.body;
  
  result.status = 1;
  result.apiReference = "/user/register";
  result.message = "Register Success";
  result.data = {};

  return res.json(result)
}

function PROFILE(req, res) {
  const token = jwt.verify(req.headers.authorization, secretKey);
  
  result.status = 1;
  result.apiReference = "/user/profile";
  result.message = "Profile Success";
  result.data = {};

  return res.json(result)
}