//action creators

//auth
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

//checklists
export function deleteChecklist(checklistId){
  return {
    type: 'DELETE_CHECKLIST',
    checklistId
  }
}

export function newChecklist(userId){
  return {
    type: 'NEW_CHECKLIST',
    userId
  }
}

//tasks
export function toggleCompleted(taskId){
  return {
    type: 'TOGGLE_COMPLETED',
    taskId
  }
}

export function deleteTask(taskId){
  return {
    type: 'DELETE_TASK',
    taskId
  }
}

export function newTask(checklistId){
  return{
    type: 'NEW_TASK',
    checklistId
  }
}