import React from 'react'
import { logo } from '../../common/images' 
import './styles.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
      <div className="header__logo">
        <img src={logo} alt="Fanz"/>
        <span className="header__logo__brand-name">Fanz</span>
      </div>
      <nav className="header__nav">
        <a className="header__nav__item" href="/">Home</a>
        <a className="header__nav__item" href="#about">About</a>
        <a className="header__nav__item" href="#contact">Contact</a>
      </nav>
      </div>
    </header>
  )
}

export default Header;