import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Checklists from '/imports/api/Checklists'

const Checklist = React.createClass({
  handleSubmit(event){
    event.preventDefault()
    const checklistName = this.refs.checklistName.value
    Meteor.call('Checklists.insert', checklistName)
    this.refs.newChecklistForm.reset()
  },
  render(){
    return (
      <div>
        <p>Your Checklists</p>
        <form ref="newChecklistForm" onSubmit={this.handleSubmit}>
          <input ref="checklistName" type="text" placeholder="Checklist name" />
          <button type="submit">Create</button>
        </form>
      </div>
    )
  }
})

export default createContainer(() => {
  Meteor.subscribe('myChecklists')
  console.log(Checklists.find().fetch())
  return {
    
  }
}, Checklist)