//action creators

//checklists
export function removeChecklist(checklistId){
  return () => Meteor.call('Checklists.remove', checklistId)
}

export function newChecklist(name){
  return () => Meteor.call('Checklists.insert', name)
}

//tasks
export function toggleShowCompleted(){
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
}

export function toggleCompleted(taskId){
  return () => Meteor.call('Tasks.toggleCompleted', taskId)
}

export function removeTask(taskId){
  return () => Meteor.call('Tasks.remove', taskId)
}

export function newTask(checklistId, name) {
  return () => Meteor.call('Tasks.insert', checklistId, name)
}

export function increasePriority(taskId) {
  return () => Meteor.call('Tasks.increasePriority', taskId)
}

export function decreasePriority(taskId) {
  return () => Meteor.call('Tasks.decreasePriority', taskId)
}