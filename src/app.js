// React code
import React, { Component } from 'react'
// var React = require('react')                 // ES5 syntax
import ReactDOM from 'react-dom'
import Home from './components/layout/Home'

class App extends Component {

    render(){
        return (
            <div>
                YakYik!
                <Home />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
