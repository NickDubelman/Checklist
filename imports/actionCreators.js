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

export function newChecklist(creator, name){
  return {
    type: 'NEW_CHECKLIST',
    creator,
    name
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

//this is a thunk
export function newTask(checklistId, name) {
  return function(dispatch){
    Meteor.call('Tasks.insert', checklistId, name)
  }
}

export function setChecklists(){
  return{
    type: 'SET_CHECKLISTS'
  }
}