/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Form from './Form'
import FormField from '../FormField'

export default {
  title: 'Sprites/Form',
  component: Form,
  tags: ['autodocs'],
  args: {
    handleSubmit: undefined,
    fields: [],
  },
}

const testFields = [
  <FormField fieldType="number" label="Alto" required />,
  <FormField fieldType="number" label="Ancho" options={['rojo', 'azul', 'amarillo']} required />,
  <FormField fieldType="checkbox" label="Limite de tiempo" alone />,
  <FormField
    fieldType="number"
    label="Limite de tiempo (segundos)"
    alone
  />,
  <FormField fieldType="submit" type="submit" text="Start" alone />,
]

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <Form {...args} />
  </div>
)

export const Configuration = Template.bind({})
Configuration.args = {
  fields: testFields,
}
