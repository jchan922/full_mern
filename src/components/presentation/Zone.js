// "Presentational" of Zones

import React, { Component } from 'react'
import styles from './styles.js'

class Zone extends Component {

    render(){
        const style = styles.zone
        const zipCode = this.props.currentZone.zipCodes[0]
        // is isSelected true ? is so make title red : otherwise title not styled
        const title = (this.props.isSelected) ? <a href="#" style={style.title}>{this.props.currentZone.name}</a> : <a href="#">{this.props.currentZone.name}</a>

        return(
            <div style={style.container}>
                <h2 style={style.header}>
                    { title }
                </h2>
                <span className="detail">{zipCode}</span><br />
            </div>
        )
    }
}

export default Zone
