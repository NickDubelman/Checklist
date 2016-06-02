const initialState = { 
  loggedIn: !!Meteor.userId(), 
  currUser: Meteor.userId(), 
}

export default function auth(state=initialState, action){
  switch(action.type){
    case 'SET_LOGIN_STATUS': {
      console.log("logged in?", !!Meteor.userId())
      return {
        loggedIn: !!Meteor.userId(),
        currUser: Meteor.userId()
      }
    }
    default:
      return state
  }
}
