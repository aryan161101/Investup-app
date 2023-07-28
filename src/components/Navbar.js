import {Link} from "react-router-dom"
import React from "react"
import "./Navbarstyles.css"
import { Component } from "react"
import Dropdown from 'react-bootstrap/Dropdown';





class Navbar extends Component {
  
  state = {clicked: false};
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
          
  render() {
      return (
        <header>
        <nav className="navbar">

          <Link to='/' style={{textDecoration:'none'}}><h1 className="app_title">Investup</h1></Link>
          <div className="menu_items" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

            <ul id="items" className={this.state.clicked ? "nav_elements active" : "nav_elements"}>

                <Link to='/' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" className="fa-solid fa-house-user"></i>Home</li></Link>
                <Link to='/about' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" className="fa-solid fa-circle-info"></i>About</li></Link>
                <Link to='/services' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" className="fa-solid fa-briefcase"></i>Services</li></Link>
                <Link to='/moto' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" className="fa-solid fa-arrows-to-dot"></i>Our Moto</li></Link>
                <Link to='/chatbox' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" class="fa fa-comments" aria-hidden="true"></i>Chat</li></Link>
                <Link to='/contact' style={{textDecoration:'none'}}><li className="nav_items"><i id="icon" className="fa-solid fa-address-book"></i>Contact</li></Link>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">Sign Up</Dropdown.Toggle> 
                    <Dropdown.Menu>
                      <Dropdown.Item href="/signup_student">SignUp as Student</Dropdown.Item>
                      <Dropdown.Item href="/signup_sponser">SignUp as Sponser</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
              
              </ul>
        </nav>
        </header>
    );
  }
}
         
export default Navbar;