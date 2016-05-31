import Checklists from '/imports/api/Checklists'

Meteor.subscribe('myChecklists')

export default function checklists(state=[], action){
  switch(action.type){
    case 'SET_CHECKLISTS':
      console.log("setting ", Checklists.find().fetch())
      return {...state, checklists: action.checklists}
      return state
    case 'NEW_CHECKLIST':
      console.log(state, action)
      return state
    case 'DELETE_CHECKLIST':
      console.log("DELETE_CHECKLIST", action)
      return state
    default:
      return state
  }
}