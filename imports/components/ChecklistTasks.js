import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import Tasks from '/imports/api/Tasks'

let subscription // need this to be global so that willUnmount can stop the
                 // subscription started by willMount

const ChecklistTasks = React.createClass({
  componentWillMount(){
    // start a subscription when a checklist asks for its tasks
    subscription = Meteor.subscribe('checklistTasks', this.props.checklistId) 
  },
  componentWillUnmount(){
    // stop the subscription when the checklist no longer needs to know about its tasks
    subscription.stop()
  },
  render(){
    return(
      <div>
        {this.props.tasks.map(
            (task) => 
              <div key={task._id} className="taskLink" >
                <span>
                  <input type="checkbox" onChange={()=>this.props.toggleCompleted(task._id)} defaultChecked={task.completed}/>
                  {task.name} 
                </span>
                <span onClick={()=>this.props.removeTask(task._id)} className="deleteIcon"> &#10060; </span>
              </div>
        )}
      </div>
    )
  }
})

const mapStateToProps = ({tasks}) => {
  return{
    tasks: tasks.tasks
  }
}

export default connect(mapStateToProps)(ChecklistTasks)

