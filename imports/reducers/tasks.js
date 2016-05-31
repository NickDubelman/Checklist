export default function tasks(state=[], action){
  switch(action.type){
    case 'NEW_TASK':
      console.log(action)
      return state
    case 'TOGGLE_COMPLETED': 
      console.log(action)
      return state
    case 'DELETE_TASK':
      console.log(action)
      return state
    default:
      return state
  }
}