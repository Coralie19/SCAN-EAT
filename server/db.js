const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/soloprojectdb', {useNewUrlParser: true}); 

const db = mongoose.connection;

db.on('open', () => console.log('DB server successfully connected')); //eslint-disable-line no-console

module.exports = mongoose;