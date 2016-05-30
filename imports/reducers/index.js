import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//import other reducers
import auth from './auth'
import checklists from './checklists'
import tasks from './tasks'

const rootReducer=combineReducers({
  auth, 
  checklists,
  tasks,
  routing: routerReducer
})

export default rootReducer