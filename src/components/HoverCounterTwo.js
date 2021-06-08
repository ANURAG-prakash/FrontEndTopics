import React, { Component } from 'react'
import UpdatedComponents from './withCounter'

class HoverCounterTwo extends Component {
   
   
    render() {
        const {count ,incrementCount } =this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default HoverCounterTwo
