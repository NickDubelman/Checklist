import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { check } from 'meteor/check'
 
const Checklists = new Mongo.Collection('Checklists')
export default Checklists

if (Meteor.isServer) {
  Meteor.publish('myChecklists',function(){
    return Checklists.find({creator: this.userId});
  })
}

Meteor.methods({
  'Checklists.insert'(name){
    check(name, String)

    if(this.userId){
      Checklists.insert({
        name,
        creator: this.userId,
      })
    }
    else{
      throw new Meteor.Error('not-authorized');
    }
  }
})

