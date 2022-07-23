import React from 'react'
import './header.css'
import ME from '../../assets/me1.jpg'
import { CTA  } from './CTA'
import { HeaderSocials } from './HeaderSocials'


const Header = () => {
  return (
    <header>
        <div className="container header__conatiner">
          <h5>Hello I'm</h5>
          <h1>Pooja Dornal</h1>
          <h5 className="text-light">FullStack Developer </h5>
          <CTA/>
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt='me' /> 
          </div>

          <a href='#contact' className="scroll__down" >scroll Down</a>
        </div>
    </header>  )
}

export default Header