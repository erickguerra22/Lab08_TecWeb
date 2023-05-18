/* eslint-disable import/no-unresolved */
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import welcome from './Welcome.module.css'
import FormField from '../../components/FormField'
import Form from '../../components/Form/Form'

const players = [
  'Millenium Falcon',
  'BB-8',
  'C-3PO',
  'Jabba the Hutt',
  'R2-D2',
]

const Welcome = () => {
  const history = useHistory()
  const [hidden, setHidden] = useState(true)

  const validateSizes = ({ target }) => {
    const { value } = target
    if (value < 4 || value > 100) {
      target.setCustomValidity('Debe ser un número entre 4 y 100')
      return
    }
    target.setCustomValidity('')
  }

  const validateTime = ({ target }) => {
    const { value } = target
    if (value < 30 || value > 600) {
      target.setCustomValidity('Debe ser un número entre 30 y 600')
      return
    }
    target.setCustomValidity('')
  }

  const unHide = () => {
    setHidden((old) => !old)
  }

  const fields = [
    <FormField fieldType="number" label="Alto" onChange={validateSizes} required />,
    <FormField fieldType="number" label="Ancho" onChange={validateSizes} required />,
    <FormField
      id="character"
      fieldType="dropdown"
      options={players}
      placeholder="Selecciona tu personaje"
      alone
    />,
    <FormField fieldType="checkbox" label="Limite de tiempo" onClick={unHide} alone />,
    <FormField
      fieldType="number"
      label="Limite de tiempo (segundos)"
      onChange={validateTime}
      required={!hidden}
      hidden={hidden}
      alone
    />,
    <FormField fieldType="submit" type="submit" text="Start" alone />,
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    const { target } = e
    history.push({
      pathname: '/maze',
      state: [+target[1].value, +target[0].value, +target[2].value, +target[4].value],
    })
  }

  return (
    <div className={welcome.styles}>
      Galactic Maze
      <Form handleSubmit={handleSubmit} fields={fields} />
    </div>
  )
}

export default Welcome
