export default function tasks(state=[], action){
  switch(action.type){
    case 'NEW_TASK':
      console.log("new task")
      return state
    case 'TOGGLE_COMPLETED': 
      console.log("toggle")
      return state
    case 'DELETE_TASK':
      console.log("delete task")
      return state
    default:
      return state
  }
}