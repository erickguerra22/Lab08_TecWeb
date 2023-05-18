/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Loading from './Loading'

export default {
  title: 'Sprites/Loading',
  component: Loading,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div>
    <Loading {...args} />
  </div>
)

export const Normal = Template.bind({})
