import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MazePage from './MazePage'
import Welcome from './Welcome/Welcome'
import Win from './Win/Win'
import Lose from './Lose/Lose'

const navigate = (page) => {
  window.location = `/?route=${page}`
}

const Page = () => (
  <Switch>
    <Route path="/win">
      <Win />
    </Route>
    <Route path="/lose">
      <Lose />
    </Route>
    <Route path="/maze">
      <MazePage />
    </Route>
    <Route path="/">
      <Welcome />
    </Route>
  </Switch>
)

export { navigate }
export default Page
