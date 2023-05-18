/* eslint-disable import/no-unresolved */
import React from 'react'
import { Link } from 'react-router-dom'
import win from './Win.module.css'

const Win = () => (
  <div className={win.styles}>
    ¡Has ganado!
    <Link to="/" tabIndex={1}>Menu principal</Link>
  </div>
)

export default Win
