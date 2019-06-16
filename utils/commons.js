require('dotenv').config();

const jwt = require('jsonwebtoken');
const secretKey = process.env.AUTH_TOKEN_KEY;

exports.verifyToken = verifyToken;


function verifyToken(req, res, next) {
  let obj = {
    status: 0,
    apiReference: "",
    message: "",
    data: {}
  }
  const token = jwt.verify(req.headers.authorization, secretKey, (error, result) => {
    if(error) {
      obj.apiReference = "verifyToken";
      obj.message = error.message;
      return res.json(obj)
    } else {
      return next()
    }
  })
}