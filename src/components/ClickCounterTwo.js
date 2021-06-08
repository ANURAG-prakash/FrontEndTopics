import React, { Component } from 'react'
import UpdatedComponents from './withCounter'

class ClickCounterTwo extends Component {
  
    
    render() {
        const {count , incrementCount } =this.props
        return (
            <div>
            <h1>
                <button onClick={incrementCount}> Click {count} times</button>
                </h1>
                </div>
        )
    }
}

export default ClickCounterTwo
