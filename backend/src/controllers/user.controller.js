userCtrl = {};

const User = require('../models/user.model');

userCtrl.register = async (req, res) =>{
    const {nombre, 
        apellidos, 
        rut, 
        contraseña, 
        departamento, 
        rol, 
        email} = req.body;

    try {
        const user = await User.create({
            nombre, apellidos, rut, contraseña, departamento, rol, email
        });
        
        sendToken(user, 201, res);

    } catch (error) {
        res.json({
            success: false,
            error: error.messege,
        });
    }
};

userCtrl.login = async (req, res, next) =>{
    const {rut, contraseña} = req.body;
    if(!rut || !contraseña){
    res.json({success: false, error: "Por favor ingrese email y contraseña"})
    }
    
try {
    const user = await User.findOne({rut}).select("+contraseña");
    if(!user){
        res.json({success:false, error:"credenciales invalidas"})
    } 
    const isMatch = await user.matchPassword(contraseña);
    if(!isMatch){
        res.json({success: false, error: "credenciales invalidas"})
    }
/*console.log(user);*/
    sendToken(user, 200, res);
} catch (error) {
    res.json({success: false, error: error.message});
}






};

userCtrl.forgotpassword = (req, res, next) =>{
    res.send("ruta olvidate contraseña");
};

userCtrl.resetpassword = (req, res, next) =>{
    res.send("ruta resetea la contraseña");
};

const sendToken = (user, statusCode, res) =>{
    //*console.log(user._id);*/
    const token = user.getSignedToken();
    const id = user._id;
    const nombre = user.nombre;
    const apellidos = user.apellidos;
    const rut = user.rut;
    const email = user.email;
    const rol = user.rol;
    //*const local = [token, user._id, user.nombre, user.apellidos, user.rut];*/
    //*console.log(local);*/
    res.status(statusCode).json({success:true, token, id, nombre, apellidos, rut, email, rol});  
}

module.exports = userCtrl;