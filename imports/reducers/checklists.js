import Checklists from '/imports/api/Checklists'

Meteor.subscribe('myChecklists')

const initialState = { 
  checklists: Checklists.find().fetch()
}

export default function checklists(state=[], action){
  Meteor.subscribe('myChecklists')
  switch(action.type){
    case 'SET_CHECKLISTS':
      console.log("setting ", Checklists.find().fetch())
      return {...state, checklists: action.checklists}
      return state
    case 'NEW_CHECKLIST':
      console.log("new checklist")
      return state
    case 'DELETE_CHECKLIST':
      console.log("DELETE_CHECKLIST")
      return state
    default:
      return state
  }
}