import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'

import Checklists from '/imports/api/Checklists'
//import Tasks from '/imports/api/Tasks'

import ChecklistTasks from '/imports/components/ChecklistTasks'
import NewTaskForm from '/imports/components/NewTaskForm'

const Checklist = React.createClass({
  render() {
      return(
        <div>
          <Link style={back} to="/">Back</Link>
          <h1>{this.props.name} - Tasks</h1>
          <ChecklistTasks checklistId={this.props.params.checklistId}/>
          <NewTaskForm checklistId={this.props.params.checklistId}/>
        </div>
      )
  }
})

export default createContainer((props) => {
  Meteor.subscribe('myChecklists')
  curr = Checklists.findOne({_id: props.params.checklistId})
  if(curr){
    name = curr.name
  }
  return {
    name: name
  }
}, Checklist)

let back={
  display: "block"
}