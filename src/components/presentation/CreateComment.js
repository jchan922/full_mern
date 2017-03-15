// CreateComment's jobs
    // control this.state.comment
    // take care of the form submission
// Once submitComment() event is run, onCreate(this.state.comment) passes data back to Conmments container to make API calls

import React, { Component } from 'react'

class CreateComment extends Component {

    constructor(){
        super()
        this.state = {
            comment: {
                username: '',
                body: ''
            }
        }
    }

    updateComment(event){
        console.log('updateComment: '+event.target.id+'=='+event.target.value)
        let commentToUpdate = Object.assign({}, this.state.comment)
        commentToUpdate[event.target.id] = event.target.value
        this.setState({
            comment: commentToUpdate
        })
    }

    submitComment(event){
        console.log('Create Comment SubContainer - submitComment: '+JSON.stringify(this.state.comment))
        this.props.onCreate(this.state.comment)     // sending object back to the main Comments container
    }

    render(){
        return (
            <div>
                <h3>CREATE COMMENT</h3>
                <input id="username" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder=" Username"/><br />
                <input id="body" onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder=" Comment"/><br />
                <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
            </div>
        )
    }


}

export default CreateComment
