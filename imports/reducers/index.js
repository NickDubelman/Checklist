import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//action creators
export function login(userId){
  return {
    type: 'LOG_IN',
    userId
  }
}

export function logout(userId){
  return {
    type: 'LOG_OUT',
    userId
  }
}

//import other reducers
function auth(state=[], action){
  switch(action.type){
    case 'LOG_IN': 
      console.log("log in")
      return state
    case 'LOG_OUT': 
      console.log("log out")
      return state
    default:
      return state
  }
}

const rootReducer=combineReducers({auth, routing: routerReducer})

export default rootReducer