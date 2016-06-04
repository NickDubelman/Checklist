export default function tasks(state={tasks: [], showCompleted: true}, action){
  switch(action.type){
    case 'SET_TASKS':
      return {...state, tasks: action.tasks}
    case 'TOGGLE_SHOW_COMPLETED':
      console.log(state, action)
      return {...state, showCompleted: !state.showCompleted}
    default:
      return state
  }
}