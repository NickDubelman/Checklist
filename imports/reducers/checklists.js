Meteor.subscribe('myChecklists')

export default function checklists(state=[], action){
  switch(action.type){
    case 'SET_CHECKLISTS':
      return {...state, checklists: action.checklists}
    default:
      return state
  }
}