import Checklists from '/imports/api/Checklists'

Meteor.subscribe('myChecklists')

const initialState = { 
  checklists: Checklists.find().fetch()
}

export default function checklists(state=initialState, action){
  switch(action.type){
    case 'NEW_CHECKLIST':
      console.log("new checklist")
      return state
    case 'DELETE_CHECKLIST':
      console.log("delete checklist")
      return state
    default:
      return state
  }
}