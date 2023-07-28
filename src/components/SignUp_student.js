import React from "react"
import { Form } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./sign_up_student.css"



const SignIn = ()=>{
    return(
      
      <Form>
        <h1>Signup as Student</h1>

        <Form.Group className="name" controlId="formBasicPassword">
          <Form.Label>First Name</Form.Label>
          <Form.Control className="first_name" type="text" placeholder="Enter your First Name" />
        </Form.Group>

        <Form.Group className="name" controlId="formBasicPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control className="last_name" type="text" placeholder="Enter your Last Name" />
        </Form.Group>

        <Form.Group className="college" controlId="formBasicPassword">
          <Form.Label>College</Form.Label>
          <Form.Control className="college_label" type="text" placeholder="College Name" />
        </Form.Group>

        <Form.Group className="university" controlId="formBasicPassword">
          <Form.Label>University</Form.Label>
          <Form.Control className="university_label" type="text" placeholder="Enter your University" />
        </Form.Group>        

      <Form.Group className="pwd" controlId="formBasicPassword">
        <Form.Label>Choose Password</Form.Label>
        <Form.Control className="pwd_label" type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="confirm_pwd" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control className="confirm_pwd_label" type="password" placeholder="Password" />
      </Form.Group>
      
      <br/><br/>
      
      <Button variant="primary" type="submit"> Submit </Button>
      <br/><br/>
      Already have an account?<Link to='/signin'>SignIn </Link>
    </Form>
    )
}

export default SignIn;