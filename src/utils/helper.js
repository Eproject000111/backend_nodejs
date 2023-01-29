const jwt = require('jsonwebtoken');

const { TokenExpiredError } = jwt;
const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }
  return res.sendStatus(401).send({ message: "Unauthorized!" });
}

let verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    console.log(token)
    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_VAR, (err, decoded) => {
      if (err) {
        // return res.status(401).send({
        //   message: "Unauthorized!"
        // });
        return catchError(err, res);
      }
      req.user = decoded.user;
      next();
    });
  };

  //   const jwt = require("jsonwebtoken");
// function isAuthenticated(req, res, next) {
//  try {
//   let token = req.get("authorization");
//   if (!token){
//    return res.status(404).json({ success: false, msg: "Token not found" });
//   }
//  token = token.split(" ")[1];
//  const decoded = jwt.verify(token, "accessSecret");
//  req.email = decoded.email;
//  next();
// } catch (error) {
// return res.status(401).json({ success: false, msg: error.message });
// // console.error(error);
// }
// }
// module.exports = { isAuthenticated }

  module.exports = {
    verifyToken
  }


  