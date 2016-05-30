export function checklists(state=[], action){
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