/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react'
import { Maze, Loading } from '@components'
import { useHistory, useLocation } from 'react-router-dom'
import mazePage from './MazePage.module.css'
import Timer from '../../components/Timer/Timer'

const backgrounds = [
  // eslint-disable-next-line max-len
  'https://static.vecteezy.com/system/resources/thumbnails/007/128/155/original/abstract-design-of-falling-snow-or-ash-particles-blue-particles-on-the-background-particle-movement-on-dark-background-particles-in-space-particle-moving-on-dark-background-star-on-dark-backround-free-video.jpg',
]

const MazePage = () => {
  const history = useHistory()
  const { state } = useLocation()
  const [mazeLayout, setMazeLayout] = useState(null)
  const [remainingTime, setRemainingTime] = useState(state[3])
  const getMaze = async (w, h) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`)
    return response.json()
  }

  const loadMaze = async () => setMazeLayout(await getMaze(state[1], state[0]))

  useEffect(() => {
    loadMaze()
    if (state[3] > 0) {
      setInterval(() => {
        setRemainingTime((prev) => {
          if (prev === 1) history.push('/lose')

          return prev - 1
        })
      }, 1000)
    }
  }, [])

  if (!mazeLayout) return <Loading />

  return (
    <div className={mazePage.styles} style={{ backgroundImage: `url(${backgrounds[0]})` }}>
      <Maze w={state[1]} h={state[0]} json={mazeLayout} scenario={0} player={state[2]} />
      {state[3] > 0
        && <Timer time={remainingTime} />}
    </div>
  )
}

export default MazePage
