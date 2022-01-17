import React from 'react'
import Menu from './Menu'

class AllUsers extends React.Component{
    render(){
        return(
            <div className='flex-box'>
                <Menu></Menu>
                <h2 className='text-center'>This page loads All Users</h2>
            </div>           
        )
    }
}

export default AllUsers;