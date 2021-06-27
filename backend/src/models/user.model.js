const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
nombre:{
    type: String,
    required: [true, "Por favor ingrese su nombre."],
    trim: true
},
apellidos:{
    type: String,
    required: [true, "Por favor ingrese sus apellidos."],
    trim: true
},
rut:{
    type: String,
    required: [true, "Por favor ingrese su rut."],
    unique: true
},
contraseña:{
    type: String,
    select: false,
    required: [true, "Por favor ingrese su contraseña."]
},
departamento:{
    type: String,
    required: [true, "Por favor seleccione su departamento."]
},
rol:{
    type: String,
    required: true
},
email:{
    type: String,
    required: [true, "Por favor ingrese su email."]
},

tickets:[{type: Schema.Types.ObjectId, ref:'Ticket'}]
// resetPasswordToken: String,
// resetPasswordExpire: Date
});

userSchema.pre("save", async function(next){
    if(!this.isModified("contraseña")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.contraseña = await bcrypt.hash(this.contraseña, salt)
    next();
});

userSchema.methods.matchPassword = async function(contraseña){
    return await bcrypt.compare(contraseña, this.contraseña)
};

userSchema.methods.getSignedToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

module.exports = model('User', userSchema);