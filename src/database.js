const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databaseset';

mongoose.connect(URI , {
    useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('La base de datos esta operativa');
});