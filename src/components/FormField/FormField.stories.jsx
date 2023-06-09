/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import FormField from './FormField'

export default {
  title: 'Sprites/FormField',
  component: FormField,
  tags: ['autodocs'],
}

const check = () => {
  console.log('check')
}

const dropDown = ({ target }) => {
  console.log(target[0].value)
}

const Template = (args) => (
  <div>
    <FormField {...args} />
  </div>
)

export const AsText = Template.bind({})
AsText.args = {
  fieldType: 'text',
  label: 'Alto',
  placeholder: 'Indica la altura del laberinto',
}

export const AsButton = Template.bind({})
AsButton.args = {
  fieldType: 'button',
  text: 'Boton',
  onClick: check,
}

export const AsCheckbox = Template.bind({})
AsCheckbox.args = {
  fieldType: 'checkbox',
  label: 'Prueba de checkbox',
  onClick: check,
}

export const AsNumber = Template.bind({})
AsNumber.args = {
  fieldType: 'number',
  placeholder: 'Prueba de number',
  label: 'Prueba de number',
}

export const AsDropdown = Template.bind({})
AsDropdown.args = {
  fieldType: 'dropdown',
  placeholder: 'Dropdown de prueba',
  options: ['azul', 'rojo', 'celeste'],
  onChange: dropDown,
}
