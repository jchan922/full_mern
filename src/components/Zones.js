// "Container" of App showing all Zones
// Where data interation / CRUD will take place
// Zones interacts with API and passes down to individual Zone

import React, { Component } from 'react'
import Zone from './Zone'

class Zones extends Component {
    // runs on load
    constructor(){
        super()
        // this.state can be called whenever
        this.state = {
            list: [
                {name: 'Zone 1', zipCodes: '10012', numComments: 10},
                {name: 'Zone 2', zipCodes: '10013', numComments: 20},
                {name: 'Zone 3', zipCodes: '10014', numComments: 30},
                {name: 'Zone 4', zipCodes: '10015', numComments: 40},
                {name: 'Zone 5', zipCodes: '10016', numComments: 50}
            ]
        }
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
            </div>
        )
    }
}

export default Zones
