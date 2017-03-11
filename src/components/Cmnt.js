// "Presentational" of Comments

import React, { Component } from 'react'
import styles from './styles.js'

class Cmnt extends Component {
    render(){
        const cmnt = styles.cmnt
        return (
            <div>
                <p style={cmnt.commentBody}>
                    {this.props.currentComment.body}
                </p>

                <span style={cmnt.span}>{this.props.currentComment.username}</span>
                <span style={cmnt.span, cmnt.pipeMargin}>|</span>
                <span style={cmnt.span}>{this.props.currentComment.timestamp}</span>
                <hr />
            </div>
        )
    }
}

export default Cmnt
