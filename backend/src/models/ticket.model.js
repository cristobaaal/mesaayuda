const {Schema, model} = require('mongoose');

const ticketSchema = new Schema({
titulo:{
    type: String,
    required: [true, "Por favor ingrese un título."],
    trim: true
},
descripcion:{
    type: String,
    required: [true, "Por favor ingrese una descripción."],
    trim: true
},
tipo:{
    type: String,
    required: [true, "Por favor seleccione un tipo."]
},
categoria:{
    type: String,
    required: [true, "Por favor seleccione una categoría."]
},
fechaApertura:{
    type: Date,
    default: Date.now,
    required: true
},
fechaGestion:{
    type: Date,
},
fechaCierre:{
    type: Date,
},
estado:{
    type: String,
    //required: [true, "Por favor seleccione un estado."]
}

});


module.exports = model('Ticket', ticketSchema);