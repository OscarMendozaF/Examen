const mongoose = require('mongoose');
//crear un objeto Schema
let Schema = mongoose.Schema;
//Definir mi colección
let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required: [true, 'Requerimos el estilo'],
    },
    nacionalidad:{type: String},
    pintura:{type: String},
    
});

module.exports = mongoose.model('Pintores',EstatalSchema);