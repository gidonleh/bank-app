import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

export default function Register(props) {
    const [id, setId] = useState(0);
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const [check, setCheck] = useState('');
    const [money, setMoney] = useState(-1);

    let history = useHistory();

    const handleSubmit = () => {
        
        if (isNaN(id) || id.length!==9) {
           alert ('ID must be of 9 digits only');
           return;
        }
        if (uname.length < 4 || !isNaN(uname)) {
            alert ('Name must be of more than 4 letters and letters only');
            return;
        }
        if (pass.length < 6) {
            alert ('Password must be of minimum 6 letters')
            return;
        }
        if (check !== pass) {
            alert ('Passwords don\'t match');
            return;
        } 
        if (money < 0 || money > 1000000) {
            alert('Current money input must be between 0 to 1,000,000');
            return;
        }
        props.addUser(id,uname,pass,money);
        history.push("/")
    }
    return (
       <div className="container text-center register-container">
           <h3 className="register-header">Register</h3>
        <div className="row">
        
       
           <div className="col">
               
           <input type="text" id="id" className="my-input mt-2" placeholder="ID" onChange={(e)=>{setId(e.target.value)}}/>
           </div>
           
        </div>  

        <div className="row">
           
           <div className="col">
           <input type="text" id="name" className="my-input mt-2" placeholder="Full Name" onChange={(e)=>{setUname(e.target.value)}}/>
           </div>
         
           
        </div>  

        <div className="row">
           
           <div className="col">
           <input type="text" id="pass" className="my-input mt-2" placeholder="Password" onChange={(e)=>{setPass(e.target.value)}}/>
           </div>
           
           
        </div>  

        <div className="row">
           
           <div className="col">
           <input type="text" id="checkpass" className="my-input mt-2" placeholder="Confirm Password" onChange={(e)=>{setCheck(e.target.value)}}/>
           </div>
         
           
        </div>  

        <div className="row">
        
           <div className="col">
           <input type="text" id="money" className="my-input mt-2" placeholder="Current Money" onChange={(e)=>{setMoney(e.target.value)}}/>
           </div>
         
           
        </div>  
        <div className="row">
            <div className="col">
       
                <button className="btn btn-primary mt-4 mb-4 mr-4 reg-btn" onClick={handleSubmit}>Enter</button>
                <button className="btn btn-primary mt-4 mb-4 ml-4 reg-btn" onClick={()=>history.push('/')}>Back</button>
            </div>
            
        </div>
        
        </div>
    )
}
