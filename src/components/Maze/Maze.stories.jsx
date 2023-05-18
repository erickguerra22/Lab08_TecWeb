/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import Maze from '.'

export default {
  title: 'Sprites/Maze',
  component: Maze,
  tags: ['autodocs'],
  args: {
    scenario: 0,
  },
}

const Template = (args) => (
  <div>
    <Maze {...args} />
  </div>
)

export const As2x2 = Template.bind({})
As2x2.args = {
  json: [['+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', '|', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', ' ', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+']],
  w: 2,
  h: 2,
}

export const As4x4 = Template.bind({})
As4x4.args = {
  json: [['+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+'], ['|', 'p', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', '|'], ['+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+', ' ', ' ', '+'], ['|', ' ', ' ', '|', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', '-', '-', '+', ' ', ' ', '+', '-', '-', '+', ' ', ' ', '+'], ['|', ' ', ' ', ' ', ' ', ' ', '|', ' ', ' ', ' ', ' ', ' ', '|'], ['+', ' ', ' ', '+', '-', '-', '+', '-', '-', '+', ' ', ' ', '+'], ['|', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '|', ' ', 'g', '|'], ['+', '-', '-', '+', '-', '-', '+', '-', '-', '+', '-', '-', '+']],
  w: 4,
  h: 4,
}