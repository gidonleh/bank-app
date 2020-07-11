import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

export default function UserDetails(props) {

    let history = useHistory();

    const [flag, setFlag] = useState(false);

    const [company, setCompany] = useState('');
    const [cost, setCost] = useState(0);

    const add = () => {
        setFlag(!flag);       
        props.addMove(company, cost, props.ind);
    }
    const addExpense = () => {
        if (flag) {
            return (
            <div className="row">
                <div className="col">
                <div className="row">
                    <input type="text" onChange={(e)=>{setCompany(e.target.value)}} placeholder="Expense name"/>
                </div>

                <div className="row">
                    <input type="text" onChange={(e)=>{setCost(e.target.value)}}/>
                </div>
                <div className="row">
                    <button onClick={add}>Report Expense</button>
                </div>
                </div>
            </div>

        )} else return (
            <div className="row">
                
            </div>
        );
    }
    return (
        <div className="container text-center text-white">
            <h3>Welcome {props.details.fn} !</h3>

            <div className="action-buttons">
                <div className="row">
                    <div className="col">
            <button className="btn btn-danger action" onClick={()=>{setFlag(!flag)}}>Action</button>
                </div>
                <div className="col">
            <button className="btn btn-info balance" onClick={()=>{alert('Your current balance is ' + props.details.current + '$')}}>Balance</button>
            </div>
            </div>
            <div className="row">
                <div className="col">
            <Link to="/edit"><button className="btn btn-success edit" onClick={props.setEditUser(props.ind)}>EDIT</button></Link>
            </div>
            <div className="col">
            <button className="btn btn-secondary exit" onClick={()=>{history.push('/')}}>EXIT</button>
            </div>
            </div>
      
            {addExpense()}
         
            </div>
        
        </div>
        
    )
}
