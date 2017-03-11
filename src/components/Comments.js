// "Container" of App showing all Comments
// Where data interation / CRUD will take place
// Zones interacts with API and passes down to individual Zone

import React, { Component } from 'react'
import Cmnt from './Cmnt'
import styles from './styles.js'

class Comments extends Component {

    // runs on load
    constructor(){
        super()
        this.state = {
            list: [
                {username: 'Ted', body: 'First Comment!', timestamp: '10:45'},
                {username: 'Rick', body: 'Second Comment!', timestamp: '10:45'},
                {username: 'Dave', body: 'Third Comment!', timestamp: '10:45'},
                {username: 'Louis', body: 'Fourth Comment!', timestamp: '10:45'},
                {username: 'Earl', body: 'Fifth Comment!', timestamp: '10:45'}
            ]
        }
    }

    render() {
        const commentsList = this.state.list.map((comment, i) => {
            return (
                <li key={i}><Cmnt currentComment={comment} /></li>
            )
        })

        const style = styles.comments

        return (
            <div>
                <h2> Comments: Zone 1 </h2>
                <div style={style.commentsBox}>
                    <ul style={style.commentsList}>
                        {commentsList}
                    </ul>
                </div>
            </div>
        )
    }

}

export default Comments
