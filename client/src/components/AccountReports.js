import React from 'react'
import Menu from './Menu'

class AccountReports extends React.Component{
    render(){
        return(
            <div className='flex-box'>
                <Menu></Menu>
                <h2 className='text-center'>This page shows Account Reports</h2>
            </div>           
        )
    }
}

export default AccountReports;