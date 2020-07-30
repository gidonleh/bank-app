import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function Login(props) {

    const [username, setUsername] = useState('');
    const [upass, setUpass] = useState('');

    const history = useHistory();

    const handleEnter = () => {
        if (username == 'ADMIN' && upass == 'ADMIN') {
            history.push('/admin');
        } else if (props.checkUser(username, upass)) {
            history.push(`/${username}`);
        }
         else alert('User Name Or Password don\'t match')
        
    }
    return (
        <div className="container text-center login-container">
           <h3 className="login-header pt-4">SV-BANK</h3>
        
        <div className="row">
        <div className="col">
        <h3> enter ADMIN in username and password to get to admin page </h3>
        </div>
        </div>
        
        <div className="row">
        
           <div className="col">
               
           <input type="text" className="my-input mt-2" placeholder="User Name" onChange={(e)=>{setUsername(e.target.value)}}/>
           </div>
           
           
        </div>  

        <div className="row">
    

           <div className="col">
               
           <input type="text" className="my-input mt-2" placeholder="Password" onChange={(e)=>{setUpass(e.target.value)}}/>
           </div>
         
           
        </div>  

        <div className="row">
            <div className="col">
                <button className="btn btn-info mt-2" onClick={handleEnter}>Log In</button>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col">
                
            Don't have an account?      
           </div>        
           
        </div>
        
        <div className="row">
            <div className="col">
            <Link to="/register"><button className="btn btn-success mb-4 mt-2">Register</button></Link>
            </div>
        </div>
       
        </div>

    )
}
