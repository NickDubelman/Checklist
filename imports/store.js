import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { Tracker } from 'meteor/tracker'

import Checklists from '/imports/api/Checklists'
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