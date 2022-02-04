import React from 'react'
import Menu from './Menu'
class AccountReports extends React.Component{
    render(){
        return(
            <div>
                <Menu/>
                <div className="container-md border border-secondary text-center">
                    <h2>This page shows Account Reports</h2>
                 </div>   
            </div>       
        )
    }
}

export default AccountReports;