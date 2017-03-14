// "Container" of App showing all Comments
// Where data interation / CRUD will take place
// Zones interacts with API and passes down to individual Zone

import React, { Component } from 'react'
import superagent from 'superagent'                                    // Superagent module allows API calls
import Comment from './../presentation/Comment'
import styles from './styles.js'

class Comments extends Component {

    constructor(){
        // for initial data storage
        super()
        // NEVER MANIPULATE INITIAL STATE
        // ALWAYS MAKE A COPY AND ALTER THE COPY
        this.state = {
            comment: {
                username: '',
                body: '',
                timestamp: '',
            },
            list: []
        }
    }

    componentDidMount(){
        // componentDidMount() gets called when component loads
        superagent
        .get('/api/comment')
        .query(null)
        .set('Accept', 'application/json')
        .end((err,response) => {
            if (err){
                alert('ERROR: '+err)
                return
            }
            let results = response.body.results
            this.setState({
                list: results
            })
        })
    }

    updateUsername(event){
        let updatedComment = Object.assign({}, this.state.comment);         // Assign updatedComment to this.state.comment Object
        updatedComment['username'] = event.target.value;                    // Assign only username key/val to new updatedComment Object

        // Save State
        this.setState({
            comment: updatedComment
        })

    }

    updateBody(event){
        let updatedComment = Object.assign({}, this.state.comment);         // Assign updatedComment to this.state.comment Object
        updatedComment['body'] = event.target.value;                        // Assign only body key/val to new updatedComment Object

        // Save State
        this.setState({
            comment: updatedComment
        })

    }

    updateTimestamp(event){
        let updatedComment = Object.assign({}, this.state.comment);         // Assign updatedComment to this.state.comment Object
        updatedComment['timestamp'] = Date();                               // Assign only timestamp key/val to new updatedComment Object

        // Save State
        this.setState({
            comment: updatedComment
        })
    }

    submitComment(){
        console.log('Submit Button Clicked', JSON.stringify(this.state.comment));
        let updatedList = Object.assign([], this.state.list);               // Copy list array from state
        updatedList.push(this.state.comment);                               // Push into this.state.list for Comments container

        // Save State and update Component and visual of page
        this.setState({
            list: updatedList
        })

        this.state.comment = {
            username: '',
            body: '',
            timestamp: '',
        }

    }

    render() {
        const commentsList = this.state.list.map((comment, i) => {
            return (
                <li key={i}><Comment currentComment={comment} /></li>
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

                    <input id="username" onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder=" Username"/><br />
                    <input id="body" onChange={this.updateBody.bind(this)} className="form-control" type="text" placeholder=" Comment"/><br />
                    <input id="timestamp" onChange={this.updateTimestamp.bind(this)} className="form-control" type="text" placeholder=" Timestamp"/><br />
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>

                </div>
            </div>
        )
    }

}

export default Comments
