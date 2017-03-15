// "Presentational" of Comments

import React, { Component } from 'react'
import styles from './styles.js'

class Comment extends Component {

    render(){
        const comment = styles.comment
        return (
            <div>
                <p style={comment.commentBody}>
                    {this.props.currentComment.body}
                </p>

                <span style={comment.span}>{this.props.currentComment.username}</span>
                <span style={comment.span, comment.pipeMargin}>|</span>
                <span style={comment.span}>{this.props.currentComment.timestamp}</span>
                <hr />
            </div>
        )
    }
}

export default Comment
