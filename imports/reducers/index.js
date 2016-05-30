import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//action creators
export function login(userId){
  return {
    type: 'LOGIN',
    userId
  }
}

export function logout(userId){
  return {
    type: 'LOGOUT'
  }
}

//import other reducers
function auth(state=[], action){
  switch(action.type){
    case 'LOGIN': 
      return {...state, 
        loggedIn: true,
        currUser: action.userId
      }
    case 'LOGOUT': 
      return {...state, 
        loggedIn: false,
        currUser: null
      }
    default:
      return state
  }
}

const rootReducer=combineReducers({auth, routing: routerReducer})

export default rootReducer