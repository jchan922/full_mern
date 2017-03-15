// "Container" of App showing all Zones
// Where data interation / CRUD will take place
// Zones interacts with API and passes down to individual Zone

import React, { Component } from 'react'
import { CreateZone, Zone} from './../presentation'
import { APIManager } from '../../utils'

class Zones extends Component {

    constructor(){
        // for initial data storage
        super()
        // this.state can be called whenever
        // NEVER MANIPULATE INITIAL STATE
        // ALWAYS MAKE A COPY AND ALTER THE COPY
        this.state = {
            selected: 0,
            list: []
        }
    }

    componentDidMount(){
        // componentDidMount() gets called when component loads
        APIManager.get('/api/zone', null, (err, response) => {
            if(err){
                alert('ERROR: '+err.message)
                return
            }
            this.setState({
                list: response.results
            })
        })
    }

    addZone(zone){
        let zoneToDb = Object.assign({}, zone)
        console.log('Zones Container - addZone: ', JSON.stringify(zoneToDb));       // Data recieved from CreateComment subcomponent
        APIManager.post('/api/zone', zoneToDb, (err, response) => {
            if(err){
                alert('ERROR: '+err.message)
                return
            }
            console.log('ZONE CREATED: '+JSON.stringify(response))
            let updatedList = Object.assign([], this.state.list);
            updatedList.push(response.results);
            console.log(updatedList);

            this.setState({
                list: updatedList
            })
        })

        // // BELOW CODE RENDERS ON FRONT END BUT DOESNT GO INTO DB
        // let updatedList = Object.assign([], this.state.list);          // Copy list array from state
        // updatedList.push(this.state.zone);                             // Push into this.state.list for Zone container
        //
        // // Save State and update Component and visual of page
        // this.setState({
        //     list: updatedList
        // })

    }

    render(){
        // iterate through the listItems array and create an <li> for each iteration
        const listItems = this.state.list.map((zone, i) => {
            let selected = (i==this.state.selected)
            return (
                <li key={i}><Zone isSelected={selected} currentZone={zone} /></li>
            )
        })

        return (
            <div>
                <h2> Zones </h2>
                <ol>
                    {listItems}
                </ol>
                <CreateZone onCreate={this.addZone.bind(this)} />
            </div>
        )
    }
}

export default Zones
