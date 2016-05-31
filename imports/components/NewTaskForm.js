import React from 'react'
import { Meteor } from 'meteor/meteor'

const NewTaskForm = React.createClass({
  handleSubmit(event){
    event.preventDefault()
    const taskName = this.refs.taskName.value
    if ( taskName === '' 
      || taskName === null 
      || taskName.trim() === ''){
      alert("Task name cannot be empty")
    }
    else{
      //Meteor.call('Tasks.insert', taskName, this.props.checklistId)
      this.props.newTask(this.props.checklistId, taskName)
    }
    this.refs.newTaskForm.reset()
  },
  render(){
    return(
      <form style={newTaskForm} ref="newTaskForm" onSubmit={(e)=>this.handleSubmit(e)}>
        <input ref="taskName" type="text" placeholder="Task name" />
        <button type="submit">Create</button>
      </form>
    )
  }
})

export default NewTaskForm

let newTaskForm={paddingTop: 20}