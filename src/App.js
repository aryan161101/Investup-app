import "./App.css"
import React from "react"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Moto from "./components/Moto"
import SignIn  from "./components/SignIn"
import SignUp from "./components/SignUp_student"
import Blank from "./components/Blank"
import Signup from "./components/SignUp_sponser"
import ChatBox from "./components/Chat_box"
import join from "./components/join"

const App = ()=>{
    return(
      <>
        <Router>
          <Navbar />
          
        
          <Routes>
            <Route path='/' element={<Home />} exact></Route>
            <Route path='/about' element={<About />} exact></Route>
            <Route path='/contact' element={<Contact />} exact></Route>
            <Route path='/services' element={<Services />} exact></Route>
            <Route path='/moto' element={<Moto />} exact></Route>
            <Route path='/signin' element={<SignIn />} exact></Route>
            <Route path='/signup_student' element={<SignUp />} exact></Route>
            <Route path='/signup_sponser' element={<Signup />} exact></Route>
            <Route path='/chatbox' element={<ChatBox />} exact></Route>
            <Route path='/join'    element={<join />}   exact ></Route>
          </Routes>
        </Router>
      </>
    )
}

export default App