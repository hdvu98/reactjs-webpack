import React from 'react'
import moment from 'moment'
import './contact.scss'

const Contact = () => {
  return <div className="contact">
    Contact
    <span>{moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
  </div>
}

export default Contact 