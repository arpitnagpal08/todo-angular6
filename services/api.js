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
  const token = jwt.sign({email, id: 1}, secretKey, { expiresIn: 60 * 60 * 60 })
  
  result.status = 1;
  result.apiReference = "/user/login";
  result.message = "Login Success";
  result.data = {
    email: email,
    name: email,
    dateOfBirth: 'date_of_birth',
    createdDate: (new Date()).toISOString(),
    token: token
  };

  return res.json(result)
}

function REGISTER(req, res) {
  const { name, email, password, dateOfBirth } = req.body;
  
  result.status = 1;
  result.apiReference = "/user/register";
  result.message = "Register Success";
  result.data = {};

  return res.json(result)
}

function PROFILE(req, res) {
  const token = jwt.verify(req.body.token, secretKey);
  
  result.status = 1;
  result.apiReference = "/user/profile";
  result.message = "Profile Success";
  result.data = {
    name: 'Arpit Nagpal',
    date_of_birth: '08/03/1995',
    total_tasks: 10,
    token: token
  };

  return res.json(result)
}