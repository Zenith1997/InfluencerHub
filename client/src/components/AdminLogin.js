import React from "react";
import { useNavigate } from 'react-router-dom';


function AdminLogin(){
    const navigate = useNavigate();
    function goHome(){
        console.log("clicked")
        navigate('dashboard');
    }
    return(
        <div>
            <main className="form-signin text-center">
                <div className='container'>
                <form>
                    <h1 className="h3 mb-3 fw-normal">Admin Login</h1>
                    <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label >Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label >Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={goHome}>Login</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
                </form>
                </div>
            </main>

        </div>
    )
}
export default AdminLogin;