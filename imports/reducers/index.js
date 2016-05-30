import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

//import other reducers
function auth(state=[], action){
  switch(action.type){
    case 'LOGIN': 
      return {...state, 
        loggedIn: true,
        currUser: action.userId
      }
    case 'LOGOUT': 
      console.log("logout")
      return state
      /*{...state, 
        loggedIn: false,
        currUser: null
      }*/
    default:
      return state
  }
}

function checklists(state=[], action){
  switch(action.type){
    case 'DELETE_CHECKLIST':
      console.log("delete checklist")
    default:
      return state
  }
}

function tasks(state=[], action){
  switch(action.type){
    case 'TOGGLE_COMPLETED': 
      console.log("toggle")
    case 'DELETE_TASK':
      console.log("delete task")
    default:
      return state
  }
}


const rootReducer=combineReducers({
  auth, 
  checklists,
  tasks,
  routing: routerReducer
})

export default rootReducer