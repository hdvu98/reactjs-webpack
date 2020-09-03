import React from 'react'
import { logo } from '../../common/images' 
import { useLocation } from 'react-router-dom'
import './styles.scss'

const Header = () => {
  const {pathname} = useLocation()
  return (
    <header className="header">
      <div className="container">
      <div className="header__logo">
        <img src={logo} alt="Fanz"/>
        <span className="header__logo__brand-name">Fanz</span>
      </div>
      <nav className="header__nav">
        <a className={`header__nav__item ${pathname === '/' && 'header__nav__item--active'}`} nav-item href="/">Home</a>
        <a className={`header__nav__item ${pathname === '/about' && 'header__nav__item--active'}`} nav-item href="/about">About</a>
        <a className={`header__nav__item ${pathname === '/contact' && 'header__nav__item--active'}`} nav-item href="/contact">Contact</a>
      </nav>
      </div>
    </header>
  )
}

export default Header;