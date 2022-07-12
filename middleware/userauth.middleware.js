const jwt = require("jsonwebtoken");

const secretKey = process.env.SECRET_KEY;

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);

    if (authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token, secretKey, (err, user)=>{
            if (err){
                res.json({success: false, message: "JWT Verification failed"})
            } else {
                req.user = user;
                next();
            }
        })
    } else {
        res.json({success: false, message: "authHeader is null"})
    }
}

module.exports = authenticateJWT;