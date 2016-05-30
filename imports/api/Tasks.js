import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'
 
const Tasks = new Mongo.Collection('Tasks')
export default Tasks

if (Meteor.isServer) {
  Meteor.publish('checklistTasks',function(){
    return Tasks.find({creator: this.userId})
  })
}

Meteor.methods({
  'Tasks.insert'(name, checklistId){
    check(name, String)

    if ( name === '' 
      || name === null 
      || name.trim() === ''){
      throw new Meteor.Error('Empty Checklist name');
    }

    if(this.userId){
      Tasks.insert({
        name,
        creator: this.userId,
        checklistId,
      })
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
  }
})
