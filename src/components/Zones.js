// "Container" of App showing all Zones
// Where data interation / CRUD will take place
// Zones interacts with API and passes down to individual Zone

import React, { Component } from 'react'
import Zone from './Zone'

class Zones extends Component {
    render(){
        return (
            <div>
                <ol>
                    <li><Zone /></li>
                    <li><Zone /></li>
                    <li><Zone /></li>
                    <li><Zone /></li>
                </ol>
            </div>
        )
    }
}

export default Zones
