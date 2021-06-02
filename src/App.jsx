import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './helperFunctions'
import './css/switcher.css'
import HomePage from './HomePage'

function App() {
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route path='/' component={HomePage} exact />
      </Switch>
    </Router>
  )
}

export default App
