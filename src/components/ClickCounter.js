import React,{Profiler,Component} from 'react'
import UpdatedComponents from './withCounter'


const logTimes = (id,phase,actualTime,baseTime,startTime,commitTime) =>{
console.table({id,phase,actualTime,baseTime,startTime,commitTime})
}

class ClickCounter extends Component {
    
    
    render() {
        const {count , incrementCount } =this.props
        return (
            
            <div>
                <Profiler id="table-info" onRender={logTimes}>
                <button onClick={incrementCount}> Click {count} times</button>
                </Profiler>
            </div>
        )
    }
}

export default UpdatedComponents(ClickCounter)
