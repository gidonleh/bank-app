import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

export default function Edit(props) {

    const [id, setId] = useState(parseInt(props.user.id));
    const [uname, setUname] = useState(props.user.fn);
    const [pass, setPass] = useState(props.user.password);
    const [check, setCheck] = useState(props.user.password);
    const [money, setMoney] = useState(props.user.current);

    let history = useHistory();

    const editUser = () => {
        
        if (id.length !== undefined) {
        if (isNaN(id) || id.length!==9) {
           alert ('ID must be of 9 digits only');
           return;
        }
        }
        if (uname.length < 4) {
            alert ('Name must be of more than 4 letters');
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
        props.edit(id,uname,pass,money, props.userIndex);
        history.push(`/${uname}`);
    }
    return (
       <div className="container text-center register-container">
           <h3 className="register-header">Edit</h3>
        <div className="row">
        
           <div className="col">
               
           <input type="text" id="id" className="my-input mt-2" value={id} onChange={(e)=>{setId(e.target.value)}}/>
           </div>
           
           
        </div>  

        <div className="row">
           
           <div className="col">
           <input type="text" id="name" className="my-input mt-2" value={uname} onChange={(e)=>{setUname(e.target.value)}}/>
           </div>
         
           
        </div>  

        <div className="row">
           
           <div className="col">
           <input type="text" id="pass" className="my-input mt-2" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
           </div>
           
           
        </div>  

        <div className="row">
           
           <div className="col">
           <input type="text" id="checkpass" className="my-input mt-2" value={check} onChange={(e)=>{setCheck(e.target.value)}}/>
           </div>
         
           
        </div>  

        <div className="row">
        
           <div className="col">
           <input type="text" id="money" className="my-input mt-2" value={money} onChange={(e)=>{setMoney(e.target.value)}}/>
           </div>
         
           
        </div>  
        <div className="row">
            <div className="col">
       
                <button className="btn btn-primary mt-4 mb-4" onClick={editUser}>Enter</button>
            </div>
           
        </div>
        </div>
    )
}
