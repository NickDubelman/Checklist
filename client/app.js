import React from 'react'
import {render} from 'react-dom'

import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import LogIn from '/imports/components/LogIn'
import Main from '/imports/components/Main'
import Dashboard from '/imports/components/Dashboard'
import Checklist from '/imports/components/Checklist'
import store, { history } from '/imports/store'

Meteor.startup( () => {
  const router = (
    <Provider store={store}>
      <Router history={ history }>
        <Route path="/" component={ Main } >
          <IndexRoute component={Dashboard}></IndexRoute>
          <Route path="/checklist/:checklistId" component={Checklist} />
        </Route>
      </Router>
    </Provider>
  )
  render(router, document.getElementById('app') )
})