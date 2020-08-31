import React from 'react'
import './styles.scss'
import { webpackLogo } from '../../common/images'

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__img">
          <img src={webpackLogo} alt="sharing-webpack"/>
        </div>
        <div className="home__title">Sharing Webpack</div>
      </div>
    </section>
  )
}

export default Home