import React ,{ Component } from 'react'
import ComponentA from './ComponentsA'

class ComponentsB extends Component {
    render() {
        return <ComponentA />
    }
}

export default ComponentsB