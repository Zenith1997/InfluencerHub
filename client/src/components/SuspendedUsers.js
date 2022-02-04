import React, { Component } from 'react'
import Menu from './Menu'
class SuspendedUsers extends Component{
    render(){
        return(
            <div>
                <Menu/>
                <div className="container-md border border-secondary text-center">
                    <h2>This page shows Suspended Users</h2>
                </div>    
            </div>
                  
        )
    }
}

export default SuspendedUsers;