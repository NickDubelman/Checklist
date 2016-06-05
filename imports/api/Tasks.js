import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'
 
import Checklists from '/imports/api/Checklists'

const Tasks = new Mongo.Collection('Tasks')
export default Tasks

if (Meteor.isServer) {
  Meteor.publish('checklistTasks',function(checklistId){
    return Tasks.find({creator: this.userId, checklistId})
  })
}

Meteor.methods({
  'Tasks.insert'(checklistId, name){
    check(name, String)

    if ( name === '' 
      || name === null 
      || name.trim() === ''){
      throw new Meteor.Error('Empty Checklist name');
    }

    if(this.userId){
      let checklistTasks = Checklists.findOne({_id: checklistId}).tasks
      let newTaskId = Tasks.insert({
        name,
        checklistId,
        creator: this.userId,
        completed: false,
        priority: checklistTasks.length || 0, 
      })
      checklistTasks.push(newTaskId)
      Checklists.update(checklistId, { $set: {tasks: checklistTasks}})
    }
    else{
      throw new Meteor.Error('Not authorized');
    }
  },
  'Tasks.remove'(taskId){
    check(taskId, String)
    if(Tasks.findOne({_id: taskId}).creator != this.userId){
      throw new Meteor.Error('This task does not belong to you, silly hacker.');
    }
    else{
      Tasks.remove(taskId)
    }
  },
  'Tasks.toggleCompleted'(taskId){
    check(taskId, String)
    if(Tasks.findOne({_id: taskId}).creator != this.userId){
      throw new Meteor.Error('This task does not belong to you, silly hacker.');
    }
    else{
      let prev = Tasks.findOne({_id: taskId}).completed
      Tasks.update(taskId, { $set: {completed: !prev}})
    }
  },
  'Tasks.increasePriority'(taskId){
    check(taskId, String)
    if(Tasks.findOne({_id: taskId}).creator != this.userId){
      throw new Meteor.Error('This task does not belong to you, silly hacker.');
    }
    else{
      let prev = Tasks.findOne({_id: taskId}).priority
      if (prev<10) prev++
      else prev=10
      console.log(prev)
      Tasks.update(taskId, { $set: {priority: prev}})
    }
  },
  'Tasks.decreasePriority'(taskId){
    check(taskId, String)
    if(Tasks.findOne({_id: taskId}).creator != this.userId){
      throw new Meteor.Error('This task does not belong to you, silly hacker.');
    }
    else{
      let prev = Tasks.findOne({_id: taskId}).priority
      if (prev>0) prev--
      else prev=0
      console.log(prev)
      Tasks.update(taskId, { $set: {priority: prev}})
    }
  }
})

