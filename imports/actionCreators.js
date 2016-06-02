//action creators

//auth
export function login(userId){
  return {
    type: 'LOGIN',
    userId
  }
}

export function logout(){
  return () => AccountsTemplates.logout()
}

//checklists
export function removeChecklist(checklistId){
  return () => Meteor.call('Checklists.remove', checklistId)
}

export function newChecklist(name){
  return () => Meteor.call('Checklists.insert', name)
}

//tasks
export function toggleCompleted(taskId){
  return () => Meteor.call('Tasks.toggleCompleted', taskId)
}

export function removeTask(taskId){
  return () => Meteor.call('Tasks.remove', taskId)
}

export function newTask(checklistId, name) {
  return () => Meteor.call('Tasks.insert', checklistId, name)
}

export function setChecklists(){
  return{
    type: 'SET_CHECKLISTS'
  }
}