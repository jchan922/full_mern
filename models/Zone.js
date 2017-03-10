var mongoose = require('mongoose')

var ZoneSchema = new mongoose.Schema({
    name: {type:String, default:''},            // name of zone
    zipCodes: {type:Array, default:[]},         // x,y array
    timestamp: {type:Date, default:Date.now}    // current time
})

module.exports = mongoose.model('ZoneSchema', ZoneSchema)
