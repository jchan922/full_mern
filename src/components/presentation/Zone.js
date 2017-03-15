// "Presentational" of Zones

import React, { Component } from 'react'
import styles from './styles.js'

class Zone extends Component {

    onSelectTitle(){
        event.preventDefault()
        console.log('onSelectTitle: '+this.props.index);
        // go back to the container using property on Zone Presentation
        // on click, we will run the select function that actually refers back to the Zones Container
        // pass back index value with it
        this.props.select(this.props.index)
    }

    render(){
        const style = styles.zone
        const zipCode = this.props.currentZone.zipCodes[0]
        // is isSelected true ? is so make title red : otherwise title not styled
        const title = (this.props.isSelected) ? <a href="#" style={style.title}>{this.props.currentZone.name}</a> : <a href="#">{this.props.currentZone.name}</a>

        return(
            <div style={style.container}>
                <h2 onClick={this.onSelectTitle.bind(this)} style={style.header}>
                    { title }
                </h2>
                <span className="detail">{zipCode}</span><br />
                <span className="detail">{this.props.currentZone.numComments}</span>
            </div>
        )
    }
}

export default Zone
