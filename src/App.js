import React, {useState} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//components
import Register from './Components/Register'
import Login from './Components/Login'
import UserDetails from './Components/UserDetails'
import Edit from './Components/Edit'
import Admin from './Components/Admin'

function App() {

  const [uIndex, setUindex] = useState(0);
  const [users, setUsers] = useState([
    {
      id: 123456789,
      fn: 'gadileh',
      password: 'pass',
      current: 250,
      expenses: [
        {company: 'Hushpuppies', expense: 300},
        {company: 'Nike', expense: 650}
      ]
    },
    {
      id: 987654321,
      fn: 'chenkys',
      password: 'password',
      current: 2500,
      expenses: [
        {company: 'Adidas', expense: 1200},
        {company: 'NBA', expense: 700}
      ]
    }
  ]);

  const addUser = (id,n,p,cash) => {
    
    setUsers([...users,{id: id, fn: n, password: p, current: cash, expenses: []} ]);
  }
  
  const addMove = (comp, price, i) => {
    users[i].expenses.push({company: comp, expense: price});
    users[i].current -= price;
    setUsers([...users]);
  }
  const checkUser = (username, password) =>{
    for (let i = 0; i < users.length; i++) {      
      
      if(users[i].fn === username && users[i].password === password){

        return true;
      }
    }
    return false;
   }

   const setEditUser = (someIndex) => {
     setUindex(someIndex);
   }

   const edit = (id, n, p, m, editIndex) => {
    users[editIndex].id = id;
    users[editIndex].fn = n;
    users[editIndex].password = p;
    users[editIndex].current = m;
    users[editIndex].expenses = users[editIndex].expenses;
    setUsers([...users]);
   }

   const erasePurchase = (pIndex, cIndex) => {
    
      users[cIndex].expenses.splice(pIndex, 1);
      setUsers([...users])
   }

   const eraseCustomer = (someIndex) => {
     users.splice(someIndex, 1);
     setUsers([...users]);
   }
  return (
    <div className="container mycontainer mt-4">
  
      <Router>
        
      <Switch>
      {users.map( (e,i) => {
        return (
          <Route exact path={`/${e.fn}`} component= {()=>{return (<UserDetails users={users} ind={i} details={e} addMove={addMove} setEditUser={setEditUser}/> )}} />
        )
      })}
        <Route exact path='/register' component={()=>{return (<Register addUser={addUser}/>)}}/>
        <Route exact path='/' component={()=>{return <Login clients={users} checkUser={checkUser} />}} />
        <Route exact path='/edit' component={()=>{return <Edit userIndex={uIndex} user={users[uIndex]} addUser={addUser} edit={edit} />}} />
        <Route exact path='/admin' component={()=>{return <Admin users={users} erasePurchase={erasePurchase} eraseCustomer={eraseCustomer}/>}} />
      </Switch>

      </Router>
    </div>
  );
}

export default App;
