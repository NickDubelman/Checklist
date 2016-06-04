import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'

import Checklists from '/imports/api/Checklists'

import ChecklistTasks from '/imports/components/ChecklistTasks'
import NewTaskForm from '/imports/components/NewTaskForm'

const Checklist = (props) => (
  <div>
    <Link style={back} to="/">Back</Link>
    <h1>{props.name} - Tasks</h1>
    <button onClick={()=>props.toggleShowCompleted()}style={hideButton}>Hide Completed</button>
    <ChecklistTasks 
      toggleCompleted={props.toggleCompleted} 
      removeTask={props.removeTask} 
      checklistId={props.params.checklistId}
      tasks={props.tasks}/>
    <NewTaskForm newTask={props.newTask} checklistId={props.params.checklistId}/>
  </div>
)

export default createContainer((props) => {
  Meteor.subscribe('myChecklists')
  let curr = Checklists.findOne({_id: props.params.checklistId}) 
  let name
  if(curr) {
    name = curr.name
  }  
  return {
    name: name
  }
}, Checklist)

let back={
  display: "block"
}

let hideButton={
  marginBottom: 17,
}