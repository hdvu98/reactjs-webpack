import React from 'react'
import './styles.scss'
import moment from 'moment'
import { webpackLogo } from '../../common/images'

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__img">
          <img src={webpackLogo} alt="sharing-webpack"/>
        </div>
        <div className="home__title">Sharing Webpack</div>
        <div className="home__content">{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
      </div>
    </section>
  )
}

export default Home