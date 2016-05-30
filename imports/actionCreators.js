//action creators
export function login(userId){
  return {
    type: 'LOGIN',
    userId
  }
}

export function logout(userId){
  return {
    type: 'LOGOUT'
  }
}

export function toggleCompleted(taskId){
  return {
    type: 'TOGGLE_COMPLETED',
    taskId
  }
}

export function deleteChecklist(checklistId){
  return {
    type: 'DELETE_CHECKLIST',
    checklistId
  }
}
export function deleteTask(taskId){
  return {
    type: 'DELETE_TASK',
    taskId
  }
}