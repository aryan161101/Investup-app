import React from "react"
import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import "./sign_in_style.css"



const SignUp = ()=>{
    
    return(
       <Form className="form">

        <h1>SignIn</h1>

        <Form.Group className="user_name" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control className="user_id" type="text" placeholder="Enter your Username" />
        </Form.Group>

        <Form.Group className="password" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control className="pass_word" type="password" placeholder="Enter your secret" />
        </Form.Group>
        <br/><br/>

        <Button variant="primary" type="submit"> Submit </Button>


       </Form>
  )
}

export default SignUp;