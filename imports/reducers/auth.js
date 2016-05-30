const initialState = { 
  loggedIn: !!Meteor.userId(), 
  currUser: Meteor.userId(), 
}

export default function auth(state=initialState, action){
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
