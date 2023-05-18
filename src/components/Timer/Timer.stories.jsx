/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Timer from './Timer'

export default {
  title: 'Sprites/Timer',
  component: Timer,
  tags: ['autodocs'],
}

const Template = (args) => (
  <div style={{ pading: '20px' }}>
    <Timer {...args} />
  </div>
)

export const AMinute = Template.bind({})
AMinute.args = {
  time: 60,
}
