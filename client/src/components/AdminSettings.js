import React, { Component } from 'react'
import Menu from './Menu'
class AdminSettings extends Component{
    render(){
        return(
            <div>
                <Menu/>
                <div className="container-md border border-secondary text-center">
                    <h2>This page shows Admin Settings</h2>
                 </div>   
            </div>       
        )
    }
}

export default AdminSettings;