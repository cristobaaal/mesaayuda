const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.protect = async (req, res, next) =>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }
    if(!token){
     res.json({messege:"no cuenta con autorizacion para ingresar a esta ruta"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);

        if(!user){
            res.json({messege: "no existe usuario con este ID"});
        }

        req.user = user;
        next();
    } catch (error) {
        res.json({messege: "No esta autorizado a ingresar a esta ruta"});
    }
}