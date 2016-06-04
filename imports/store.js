import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { Tracker } from 'meteor/tracker'

import Checklists from '/imports/api/Checklists'
import Tasks from '/imports/api/Tasks'
import rootReducer from '/imports/reducers/index'

const middleware = [thunk]

const store = applyMiddleware(thunk)(createStore)(rootReducer)
export default store

export const history = syncHistoryWithStore(browserHistory, store)

//this is the pattern I will use to inject reactive meteor data into redux store
//dispatch set actions to update store whenever collection is updated
Tracker.autorun(() => {
  store.dispatch({
    type: 'SET_CHECKLISTS',
    checklists: Checklists.find().fetch()
  })
})

Tracker.autorun(() => {
  store.dispatch({
    type: 'SET_TASKS',
    tasks: Tasks.find().fetch(),
    hideCompleted: store.getState().tasks.hideCompleted
  })
})

//dispatches an action everytime a user's login status changes
//this consolidates login and logout into one action
Tracker.autorun(() => {
  store.dispatch({
    type: 'SET_LOGIN_STATUS',
    loggedIn: !!Meteor.userId()
  })
})