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

        var zips = params['zipCodes']               // clean up data for multiple zip code entries
        var zip = zips.split(',')
        var newZips = []
        zip.forEach(function(zipCode){
            newZips.push(zipCode.trim());           // clean up data for spaces and push into newArray
        })

        params['zipCodes'] = newZips

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
