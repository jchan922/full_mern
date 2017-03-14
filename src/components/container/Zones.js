// "Container" of App showing all Zones
// Where data interation / CRUD will take place
// Zones interacts with API and passes down to individual Zone

import React, { Component } from 'react'
import superagent from 'superagent'                                    // Superagent module allows API calls
import Zone from './../presentation/Zone'

class Zones extends Component {

    constructor(){
        // for initial data storage
        super()
        // this.state can be called whenever
        // NEVER MANIPULATE INITIAL STATE
        // ALWAYS MAKE A COPY AND ALTER THE COPY
        this.state = {
            zone: {
                name: '',
                zipCodes: '',
            },
            list: []
        }
    }

    componentDidMount(){
        // componentDidMount() gets called when component loads
        superagent
        .get('/api/zone')
        .query(null)
        .set('Accept', 'application/json')
        .end((err, response) => {

            if(err){
                alert('ERROR: '+err)
                return
            }

            let results = response.body.results                         // Results from our API call

            this.setState({
                list: results
            })

        })
    }

    updatedZone(event){
        let updatedZone = Object.assign({}, this.state.zone);           // Assign updatedZone to this.state.comment Object copy
        updatedZone[event.target.id] = event.target.value;              // Assign input key/val to new updatedZone Object copy

        // Save State
        this.setState({
            zone: updatedZone
        })

    }

    addZone(){
        let updatedList = Object.assign([], this.state.list);          // Copy list array from state
        updatedList.push(this.state.zone);                             // Push into this.state.list for Zone container

        // Save State and update Component and visual of page
        this.setState({
            list: updatedList
        })

        this.state.comment = {
            username: '',
            body: '',
            timestamp: '',
        };

    }

    render(){
        // iterate through the listItems array and create an <li> for each iteration
        const listItems = this.state.list.map((zone, i) => {
            return (
                <li key={i}><Zone currentZone={zone} /></li>
            )
        })

        return (
            <div>
                <ol>
                    {listItems}
                </ol>

                <input id="name" onChange={this.updatedZone.bind(this)} className="form-control" type="text" name=" Zone Name" placeholder=" Name"/><br />
                <input id="zipCodes" onChange={this.updatedZone.bind(this)} className="form-control" type="text" placeholder=" Zipcode(s)"/><br />
                <button onClick={this.addZone.bind(this)} className="btn btn-info">Add Zone</button>

            </div>
        )
    }
}

export default Zones
