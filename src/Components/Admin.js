import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

export default function Admin(props) {


    const [flag, setFlag] = useState(1);

    const eraseExpense = (customerIndex, purchaseIndex) => {
      
        props.erasePurchase(customerIndex, purchaseIndex);
    }

   const del = (customIndex) => {
       props.eraseCustomer(customIndex);
   }
    return (
        <div className="container">

            {props.users.map( (e,i) => {

                return (
              
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <span className="mr-4 mySpan">{e.fn}</span>
                            <span className="ml-4 mySpan"> {e.id}</span>
                            <Accordion.Toggle as={Button} variant="link" eventKey={flag} className="ml-4">                      
                            <span class="dot"></span>
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={flag}>
                            <Card.Body>
                                
                            {e.expenses.map( (element, elementIndex) => {
                                return (
                                    
                                    <div className="row mb-2">
                                        <div className="col">{element.company}</div>
                                        <div className="col">{element.expense}</div>
                                        <div className="col"><button onClick={()=>{eraseExpense(elementIndex,i)}}>X {elementIndex} {'\u00A0'} {i}</button> </div>
                                        
                                    </div>
                                )
                            })}
                            <div className="row"><button className="btn btn-danger" onClick={()=>{del(i)}}>Cancel</button></div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                  
                )
                
            })}
   
        </div>        
    )
}
