const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

//Models
require('./src/models/user');
require('./src/models/pet');

const app = express();

//Routes
const AccountRoutes = require('./src/routes/account.routes');
const PetRoutes = require('./src/routes/pet.routes');

//Middlewares
app.use(bodyParser.json());
app.use(fileUpload());

//Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-ABR, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, Custom-Filter-Header');
    res.header('Access-Control-Expose-Headers', 'X-ABR');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    next();
});

//Routes Implements
app.use('/api', AccountRoutes);
app.use('/api', PetRoutes);

//Conection to database and run application
const port = process.env.PORT || 8001;
const uri = 'mongodb+srv://user:Martinez48400161@jmcluster-aob61.mongodb.net/test?retryWrites=true';
const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
};

app.listen(port);
mongoose.connect(uri, options);