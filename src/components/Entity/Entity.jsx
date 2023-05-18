import React from 'react'
import PropTypes from 'prop-types'

import entity from './Entity.module.css'

const Entity = ({
  src, gridArea, player = false, backgroundColor, rotate, mirror,
}) => {
  const zIndex = player ? '1' : '0'
  return (
    <div
      className={entity.styles}
      style={{
        backgroundColor, gridArea, zIndex, rotate,
      }}
    >
      <img src={src} style={{ transform: `scaleX(${mirror ? '-1' : '1'})` }} />
    </div>
  )
}

Entity.defaultProps = {
  player: false,
  backgroundColor: 'transparent',
  rotate: '0deg',
  src: undefined,
  mirror: false,
}

Entity.propTypes = {
  gridArea: PropTypes.string.isRequired,
  player: PropTypes.bool,
  src: PropTypes.string,
  backgroundColor: PropTypes.string,
  rotate: PropTypes.string,
  mirror: PropTypes.bool,
}

export default Entity
