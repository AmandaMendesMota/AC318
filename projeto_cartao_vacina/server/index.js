const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000); //se existe uma porta livre dada pelo SO, se não usa a 3000

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/vacina', require('./routes/vacina'));
app.use('/api/paciente', require('./routes/paciente'));

//Starting the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});