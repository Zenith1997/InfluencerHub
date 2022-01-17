import React from 'react'
import Menu from './Menu'

class NewUsers extends React.Component{
    render(){
        return(
            <div className='flex-box'>
                <Menu></Menu>
                <h2 className='text-center'>This page Shows New Users</h2>
            </div>           
        )
    }
}

export default NewUsers;