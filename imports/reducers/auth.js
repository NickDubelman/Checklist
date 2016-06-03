export default function auth(state=[], action){
  switch(action.type){
    case 'SET_LOGIN_STATUS': {
      return {
        loggedIn: !!Meteor.userId(),
        currUser: Meteor.userId()
      }
    }
    default:
      return state
  }
}
