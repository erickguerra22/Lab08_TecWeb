import React from 'react'
import PropTypes from 'prop-types'

import timer from './Timer.module.css'

const Timer = ({ time }) => {
  const minutes = Math.floor(time / 60)
  const seconds = time - (minutes * 60)
  return (
    <p className={timer.styles}>
      {`Tiempo restante: ${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`}
    </p>
  )
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
}

export default Timer
