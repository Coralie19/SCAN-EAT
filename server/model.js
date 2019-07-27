const mongoose = require('./db');

const Schema = mongoose.Schema;

const ItemSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  category :  {
    type: String,
    required: true
  },
  id : {
    type: Number,
    required: true
  },
  date : {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Item', ItemSchema); // or Items ?