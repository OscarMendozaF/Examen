const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

let estatalesRouter = require('./routes/pintor');

const app = express();

app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');
//sitio estatico
app.use(express.static(__dirname+'/public'));
app.use('/pintor',pintoresRouter);

mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://rootadmin:T4n48474@cluster0-e9jsl.mongodb.net/curso?retryWrites=true&w=majority';
mongoose.connect(cadena,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Conexión con Mongo exitosa');
    })
    .catch(err=> console.log(err));


app.listen(port,()=>{
    console.log('Escuchando el puerto 3000');
});
