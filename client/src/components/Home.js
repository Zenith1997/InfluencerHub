import React from 'react'
import Menu from './Menu'

class Home extends React.Component{
    render(){
        return(
            <div className='flex-box'>
                <Menu></Menu>
                <h2 className='text-center'>This is the home page</h2>
            </div>           
        )
    }
}

export default Home;