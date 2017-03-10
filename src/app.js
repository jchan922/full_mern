// React code
import React, { Component } from 'react'
// var React = require('react')                 // ES5 syntax
import ReactDOM from 'react-dom'
import Zones from './components/Zones'

class App extends Component {

    render(){
        return (
            <div>
                Hello React!
                <Zones />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
