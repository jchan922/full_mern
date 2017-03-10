var Comment = require('../models/Comment')    // inject model

module.exports = {

    find: function(params, callback){
        Comment.find(params, function(err, comment){
            if(err){                            // handle error first
                callback(err,null)
                return
            }
            callback(null, comment)               // desired data if successful
        })
    },

    findById: function(id, callback){
        Comment.findById(id, function(err, comment){
            if(err){                            // handle error first
                callback(err,null)
                return
            }
            callback(null, comment)               // desired data if successful
        })
    },

    create: function(params, callback){
        Comment.create(params, function(err, comment){
            if (err){
                callback(err, null)
                return
            }
            callback(null, comment)
        })
    },

    update: function(id, params, callback){
        Comment.findByIdAndUpdate(id, params, {new:true}, function(err, comment){
            if (err){
                callback(err, null)
                return
            }
            callback(null, comment)
        })
    },

    delete: function(id, callback){
        Comment.findByIdAndRemove(id, function(err){
            if (err){
                callback(err, null)
                return
            }
            callback(null, comment)
        })
    },

}
