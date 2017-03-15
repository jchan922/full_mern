var Zone = require('../models/Zone')    // inject model

module.exports = {

    find: function(params, callback){
        Zone.find(params, function(err, zone){
            if(err){                            // handle error first
                callback(err,null)
                return
            }
            callback(null, zone)               // desired data if successful
        })
    },

    findById: function(id, callback){
        Zone.findById(id, function(err, zone){
            if(err){                            // handle error first
                callback(err,null)
                return
            }
            callback(null, zone)               // desired data if successful
        })
    },

    create: function(params, callback){
        Zone.create(params, function(err, zone){
            if (err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },

    update: function(id, params, callback){
        Zone.findByIdAndUpdate(id, params, {new:true}, function(err, zone){
            if (err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },

    delete: function(id, callback){
        Zone.findByIdAndRemove(id, function(err){
            if (err){
                callback(err, null)
                return
            }
            callback(null, zone)
        })
    },

}
