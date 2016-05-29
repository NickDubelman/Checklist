import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from '/imports/reducers/index'

const auth = { "loggedIn": false }
const defaultState={
  auth
}

const store = createStore(rootReducer, defaultState)
export default store

export const history = syncHistoryWithStore(browserHistory, store)
