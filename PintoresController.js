let mongoose = require('mongoose');
let Estatal = require('../models/Pintores');

let estatalController = {};

/*LISTAR*/
estatalController.list = (req, res)=>{
    Estatal.find({})
        .limit(20)
        .skip(0)
        .exec((err, pintor)=>{
            if (err){
                console.log('Error:',err);
            }
           
            res.render('../views/index',{
                pintores: pintor,
                title: "Listado de pintores",
                year: new Date().getFullDate()
            });
        })
};

module.exports = PintoresController;