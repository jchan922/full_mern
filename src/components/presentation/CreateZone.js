// CreateZone's jobs
    // control this.state.comment
    // take care of the form submission
// Once addZone() event is run, onCreate(zoneToAdd) passes data back to Zone container to make API calls

import React, { Component } from 'react'

class CreateZone extends Component {

    constructor(){
        super()
        this.state = {
            zone: {
                name: '',
                zipCodes: '',
            }
        }
    }

    updatedZone(event){
        console.log('updatedZone: '+event.target.id+'=='+event.target.value)
        let updatedZone = Object.assign({}, this.state.zone)             // Assign updatedZone to this.state.comment Object copy
        updatedZone[event.target.id] = event.target.value                // Assign input key/val to new updatedZone Object copy

        // Save state
        this.setState({
            zone: updatedZone
        })
    }

    addZone(event){
        let zoneToContainer = Object.assign({}, this.state.zone)
        // clean zipcodes before sending to DB
        var dirtyZipcodes = zoneToContainer.zipCodes.split(',')           // clean up data for multiple zip code entries
        var cleanZipcodes = []
        dirtyZipcodes.forEach(function(zipCode){                          // trim() to remove spaces and push into newArray
            cleanZipcodes.push(zipCode.trim())
        })
        zoneToContainer['zipCodes'] = cleanZipcodes
        console.log('Create Zone SubContainer - addZone: '+JSON.stringify(zoneToContainer))
        this.props.onCreate(zoneToContainer)                              // sending object back to the main Zone container
    }

    render(){
        return(
            <div>
                <h3>CREATE A ZONE</h3>
                <input id="name" onChange={this.updatedZone.bind(this)} className="form-control" type="text" placeholder=" Name"/><br />
                <input id="zipCodes" onChange={this.updatedZone.bind(this)} className="form-control" type="text" placeholder=" Zipcode(s)"/><br />
                <button onClick={this.addZone.bind(this)} className="btn btn-info">Add Zone</button>
            </div>
        )
    }

}

export default CreateZone
