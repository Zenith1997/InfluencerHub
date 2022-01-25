import React from 'react'
import Menu from './Menu'
import axios from "axios"

class AllUsers extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        };
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/useraccounts').then(res => {
            this.setState({
                data: res.data
            });
        });
    }

    render(){
        return(
            <div className="container-fluid" style={{marginTop:"30px"}}>
                <div
              className="container-fluid"
              style={{
                position: "absolute",
                textAlign: "center",
                marginTop: "10px",
                paddingTop:"5px"
              }}
            >
               {this.state.data.map(data => {
                    return(
                        <React.Fragment>
                        <div className='container' style={{border:"1px solid black", padding:"40px"}}>
                            <p>
                                <b>Name</b> : {data.firstName + " " + data.lastName}
                            </p>
                            <p>
                                <b>Type</b> : {data.type}
                            </p>
                            <p>
                                <b>Email</b> : {data.email}
                            </p>
                        </div>
                    </React.Fragment>
                    );
                })}
            </div>
            </div>       
        )
    }
}

export default AllUsers;