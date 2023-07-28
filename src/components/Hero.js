// import React from 'react'
import {BsFillRocketFill} from 'react-icons/bs';
import {BsFillPeopleFill} from 'react-icons/bs';
import {BsCoin} from 'react-icons/bs';
import "./HeroStyles.css"
import {BsGraphUpArrow} from 'react-icons/bs'
import {FaHandHoldingUsd} from 'react-icons/fa'
const Hero = () => {
  return (
    <nav>
    <div>
    <div className="people">
    <BsFillRocketFill/>
      <h2 className="num-pe">1923+</h2>
      <h3 className="text-pe">Starups<br></br> 
      Registered</h3>
    </div>
    <div className="rocket">
    <BsFillPeopleFill/>
      <h2 className="num-ro">4612+</h2>
      <h3 className="text-ro">Investors on<br></br> 
      platform</h3>
    </div>
    <div className="Bitcoin">
    <BsCoin/>
      <h2 className="num-bi">$10+Mn</h2><br></br>
      <h3 className="text-bi">Funds raised</h3>
    </div>
    </div>
    <div className="graph">
    <BsGraphUpArrow/>
      <h2 className="num-gr">200+</h2><br></br>
      <h3 className="text-gr">Portfolio<br></br>
      value</h3>
    </div>
    <div className="hand">
    <FaHandHoldingUsd/>
      <h2 className="num-ha">100+</h2><br></br>
      <h3 className="text-ha">Investments<br></br>
      made</h3>
      </div>
    </nav>
    
    
  )
}

export default Hero