import React ,{ Component } from 'react'
import { UserConsumer } from './userContext'


class ComponentsA extends Component {
    render() {
        return (
           <UserConsumer>
               {
                   (username) =>{
                       return <div>
                           hellow {username}
                       </div>
                   }
               }
           </UserConsumer>
        )
    }
}

export default ComponentsA