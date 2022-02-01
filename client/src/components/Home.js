import React from 'react'
import graph from '../images/graph.png'

class Home extends React.Component{
    render(){
        return(                
            <div className="border-secondary text-center">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2" style={{paddingLeft:"20px"}}>Dashboard</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                <div style={{paddingRight:"20px"}}>
                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar"></span>
                    This week
                </button>
                </div>
                </div>
            </div>
            <img src={graph} alt=""/>
            </div>
        )
    }
}

export default Home;