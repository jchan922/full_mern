// "Container" of App showing all Comments
// Where data interation / CRUD will take place
// Comments interacts with API and passes down to individual Zone

import React, { Component } from 'react'
import { CreateComment, Comment } from './../presentation'
import styles from './styles.js'
import { APIManager } from '../../utils'

class Comments extends Component {

    constructor(){
        // for initial data storage
        super()
        // NEVER MANIPULATE INITIAL STATE
        // ALWAYS MAKE A COPY AND ALTER THE COPY
        this.state = {
            list: []
        }
    }

    componentDidMount(){
        // componentDidMount() gets called when component loads
        APIManager.get('/api/comment', null, (err, response) => {
            if(err){
                alert('ERROR: '+err.message)
                return
            }
            this.setState({
                list: response.results
            })
        })
    }

    submitComment(comment){
        console.log('Comments Container - submitComment: ', JSON.stringify(comment));                // Data recieved from CreateComment subcomponent
        let commentToSubmit = Object.assign({}, comment)
        APIManager.post('/api/comment', commentToSubmit, (err, response) => {
            if(err){
                alert('ERROR: '+err.message)
                return
            }
            console.log('COMMENT CREATED: '+JSON.stringify(response));
            let updatedList = Object.assign([], this.state.list);               // Copy list array from state
            updatedList.push(response.results);                                 // Push into this.state.list for Comments container
            console.log(updatedList);

            // Save State and update Component and visual of page
            this.setState({
                list: updatedList
            })
        })
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

                    <CreateComment onCreate={this.submitComment.bind(this)} />

                </div>
            </div>
        )
    }

}

export default Comments
