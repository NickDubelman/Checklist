import React from 'react'
import { Meteor } from 'meteor/meteor'

let taskSubscription // need this to be global so that willUnmount can stop the
                     // subscription started by willMount

const ChecklistTasks = React.createClass({
  componentWillMount(){
    // start a subscription when a checklist asks for its tasks
    taskSubscription = Meteor.subscribe('checklistTasks', this.props.checklistId) 
  },
  componentWillUnmount(){
    // stop the subscription when the checklist no longer needs to know about its tasks
    taskSubscription.stop()
  },
  render(){
    let sortedTasks = this.props.tasks.sort((a, b)=>{
      if (a.priority < b.priority) return 1
      if (a.priority > b.priority) return -1
      return 0 
    })

    return(
      <div>
        {this.props.tasks.map(
            (task) => 
              <div key={task._id} className="taskLink" >
                <span>
                  <div className="priorityLabel">
                    {task.priority < 5 ? " Low" : null}
                    {task.priority == 5 ? " Normal" : null}
                    {task.priority > 5 ? " High" : null}
                  </div>
                  <div className="priorityArrows">
                    <span className="arrow upArrow" onClick={()=>this.props.increasePriority(task._id)}>
                      {task.priority<10 ? <span>&#10140;</span> : null}
                    </span> 
                    <span className="arrow downArrow" onClick={()=>this.props.decreasePriority(task._id)}>
                      {task.priority>0 ? <span>&#10140;</span> : null }
                    </span>
                  </div>
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

export default ChecklistTasks

