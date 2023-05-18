/* eslint-disable import/no-unresolved */
import React from 'react'
import { Link } from 'react-router-dom'
import lose from './Lose.module.css'

const Lose = () => (
  <div className={lose.styles}>
    ¡ Se ha acabado el tiempo!
    <Link to="/"> Regresar al menu principal</Link>
  </div>
)

export default Lose
