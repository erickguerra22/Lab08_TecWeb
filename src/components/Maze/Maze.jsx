/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Entity } from '@components'
import maze from './Maze.module.css'

const scenarios = [
  {
    corner: '/images/corners/asteroid.png',
    walls: '/images/walls/asteroids.png',
    floor: undefined,
    goal: '/images/goals/death-star.png',
  },
]
const players = [
  '/images/characters/millenium-falcon.png',
  '/images/characters/bb8.png',
  '/images/characters/c3po.png',
  '/images/characters/jabba.png',
  '/images/characters/r2d2.png',
]

const Maze = ({
  json, w, h, scenario, player,
}) => {
  const columns = w * 3 + 1
  const rows = h * 2 + 1
  const availableSpaces = []
  const winSpace = []
  const history = useHistory()
  const autoFocus = useCallback((el) => (el ? el.focus() : null), [])

  const [pos, setPos] = useState({ x: 2, y: 2 })
  const [rotation, setRotation] = useState('0deg')
  const [mirror, setMirror] = useState(false)

  const handleKeyDown = ({ key }) => {
    switch (key) {
      case 'ArrowDown':
        if (availableSpaces.includes(`${pos.y + 1} / ${pos.x}`)) {
          setPos((prev) => ({ x: prev.x, y: prev.y + 1 }))
          setRotation('90deg')
          setMirror(false)
        }
        break
      case 'ArrowUp':
        if (availableSpaces.includes(`${pos.y - 1} / ${pos.x}`)) {
          setPos((prev) => ({ x: prev.x, y: prev.y - 1 }))
          setRotation('270deg')
          setMirror(false)
        }
        break
      case 'ArrowLeft':
        if (availableSpaces.includes(`${pos.y} / ${pos.x - 1}`)) {
          setPos((prev) => ({ x: prev.x - 1, y: prev.y }))
          setRotation('0deg')
          setMirror(true)
        }
        break
      case 'ArrowRight':
        if (availableSpaces.includes(`${pos.y} / ${pos.x + 1}`)) {
          setPos((prev) => ({ x: prev.x + 1, y: prev.y }))
          setRotation('0deg')
          setMirror(false)
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    if (`${pos.y} / ${pos.x}` === winSpace[0]) history.push('/win')
  }, [pos])

  return (
    <div
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={maze.styles}
      style={{
        gridTemplateColumns: `repeat(${columns}, ${80 / columns}vw)`,
        gridTemplateRows: `repeat(${rows}, ${80 / rows}vh)`,
      }}
      ref={autoFocus}
    >
      {
        json.map((row, ri) => row.map((col, ci) => {
          const key = `${ri}-${ci}`
          switch (col) {
            case 'p':
              availableSpaces.push(`${ri + 1} / ${ci + 1}`)
              return (
                <React.Fragment key={key}>
                  <Entity key="player" src={players[player]} gridArea={`${pos.y} / ${pos.x}`} player rotate={rotation} mirror={mirror} />
                  <Entity key={key} src={scenarios[scenario].floor} gridArea={`${ri + 1} / ${ci + 1}`} />
                </React.Fragment>
              )
            case '+':
              return <Entity key={key} src={scenarios[scenario].corner} gridArea={`${ri + 1} / ${ci + 1}`} />
            case '|':
              return <Entity key={key} src={scenarios[scenario].walls} gridArea={`${ri + 1} / ${ci + 1}`} />
            case '-':
              return <Entity key={key} src={scenarios[scenario].walls} gridArea={`${ri + 1} / ${ci + 1}`} />
            case 'g':
              availableSpaces.push(`${ri + 1} / ${ci + 1}`)
              winSpace.push(`${ri + 1} / ${ci + 1}`)
              return <Entity key={key} src={scenarios[scenario].goal} gridArea={`${ri + 1} / ${ci + 1}`} />
            case ' ':
              availableSpaces.push(`${ri + 1} / ${ci + 1}`)
              return <Entity key={key} src={scenarios[scenario].floor} gridArea={`${ri + 1} / ${ci + 1}`} />
            default:
              return null
          }
        }))
      }
    </div>
  )
}

Maze.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  scenario: PropTypes.number.isRequired,
  player: PropTypes.number.isRequired,
}

export default Maze
