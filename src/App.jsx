import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './helperFunctions'
import './css/switcher.css'
import HomePage from './HomePage'
import ProjectPage from './ProjectPage'
import ScrollTop from './components/ScrollTop'

function App() {
  return (
    <Router>
      <ToastContainer />
      <ScrollTop />
      <Switch>
        <Route path='/' component={HomePage} exact />
        <Route path='/projects/:project' component={ProjectPage} exact />
      </Switch>
    </Router>
  )
}

export default App
