import React from 'react'
import {render} from 'react-dom'

import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'

import App from '/imports/components/App'
import LogIn from '/imports/components/LogIn'
import Dashboard from '/imports/components/Dashboard'
import Checklist from '/imports/components/Checklist'
import store, { history } from '/imports/store'

Meteor.startup( () => {
  const router = (
    <Provider store={store}>
      <Router history={ history }>
        <Route path="/" component={ App } >
          <IndexRoute component={Dashboard} />
          <Route path="/checklist/:checklistId" component={Checklist} />
        </Route>
      </Router>
    </Provider>
  )
  render(router, document.getElementById('app') )
})

var loginHook = function(error, state){
  if (!error) {
    store.dispatch({type: "LOGIN", userId: Meteor.userId()})
  }
}

AccountsTemplates.configure({
    onSubmitHook: loginHook
})