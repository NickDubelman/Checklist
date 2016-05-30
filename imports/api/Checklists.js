import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'
 
const Checklists = new Mongo.Collection('Checklists')
export default Checklists

if (Meteor.isServer) {
  Meteor.publish('myChecklists',function(){
    return Checklists.find({creator: this.userId})
  })
}

Meteor.methods({
  'Checklists.insert'(name){
    check(name, String)

    if ( name === '' 
      || name === null 
      || name.trim() === ''){
      throw new Meteor.Error('Empty Checklist name');
    }

    if(this.userId){
      Checklists.insert({
        name,
        creator: this.userId,
        tasks: [],
      })
    }
    else{
      throw new Meteor.Error('Not authorized');
    }
  },
  'Checklists.remove'(checklistId){
    check(checklistId, String)
    if(Checklists.findOne({_id: checklistId}).creator != this.userId){
      throw new Meteor.Error('This checklist does not belong to you, silly hacker.');
    }
    else{
      Checklists.remove(checklistId)
    }
  }
})

