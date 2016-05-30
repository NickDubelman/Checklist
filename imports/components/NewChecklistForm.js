import React from 'react'
import { Meteor } from 'meteor/meteor'

const NewChecklistForm = React.createClass({
  handleSubmit(event){
    event.preventDefault()
    const checklistName = this.refs.checklistName.value
    if ( checklistName === '' 
      || checklistName === null 
      || checklistName.trim() === ''){
      alert("Checklist name cannot be empty")
    }
    else{
      Meteor.call('Checklists.insert', checklistName)
    }
    this.refs.newChecklistForm.reset()
  },
  render(){
    return(
      <form style={newChecklistForm} ref="newChecklistForm" onSubmit={this.handleSubmit}>
        <input ref="checklistName" type="text" placeholder="Checklist name" />
        <button type="submit">Create</button>
      </form>
    )
  }
})

export default NewChecklistForm

let newChecklistForm={paddingTop: 20}