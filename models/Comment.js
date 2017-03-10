var mongoose = require('mongoose')

var CommentSchema = new mongoose.Schema({
    username: {type:String, default:''},        // username
    body: {type:String, default:''},            // body of text
    timestamp: {type:Date, default:Date.now}    // current time
})

module.exports = mongoose.model('CommentSchema', CommentSchema)
