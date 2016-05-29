import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'

import Checklists from '/imports/api/Checklists'
import LogIn from '/imports/components/LogIn'

const Dashboard = React.createClass({
  handleSubmit(event){
    event.preventDefault()
    const checklistName = this.refs.checklistName.value
    Meteor.call('Checklists.insert', checklistName)
    this.refs.newChecklistForm.reset()
  },
  render(){
    if(Meteor.userId()){
      content=(
        <div>
          <a href="" onClick={Meteor.logout}>Logout</a>
          <p>Your Checklists</p>
          <ul>
            {this.props.checklists.map(
              (checklist) => <li key={checklist._id}>{checklist.name}</li>
            )}
          </ul>
          <form ref="newChecklistForm" onSubmit={this.handleSubmit}>
            <input ref="checklistName" type="text" placeholder="Checklist name" />
            <button type="submit">Create</button>
          </form>
        </div>
      )
    }
    else content=<LogIn />
    return content
  }
})

export default createContainer(() => {
  Meteor.subscribe('myChecklists')
  return {
    checklists: Checklists.find().fetch()
  }
}, Dashboard)