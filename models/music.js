const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const musicSchema = new Schema({
    productName: {type:String, unique: true},
    quantity: {type:Number, default: 0, required: true}
},  {timestamps: true})

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;