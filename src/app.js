const express = require('express');
const cors = require('cors');
const app = express();
const usersRoutes = require('./routes/users');

//SETINGS
app.set('port', process.env.PORT ? process.env.PORT : '4000');
app.set('host', process.env.HOST ? process.env.HOST : '0.0.0.0');

//MIDDLEWARES
app.use(cors());
app.use(express.json());

//ROUTES
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

app.get('/api/notes',(req,res) => {
    return res.send('notes routes');
});

module.exports = app;