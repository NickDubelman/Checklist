export default function tasks(state={tasks: [], hideCompleted: false}, action){
  switch(action.type){
    case 'SET_TASKS':
      let tasks = action.tasks
      return {...state, tasks: tasks}
    case 'TOGGLE_SHOW_COMPLETED':
      return {...state, hideCompleted: !state.hideCompleted}
    default:
      return state
  }
}

export const getVisibleTasks = (tasks, hideCompleted) => {
  if(hideCompleted){
    tasks=tasks.filter(task => !task.completed)
  }
  return tasks
}