import React from 'react'
import { Link } from 'react-router'

let myChecklistSubscription

const MyChecklists = React.createClass({
  componentWillMount(){
    myChecklistSubscription = Meteor.subscribe('myChecklists') 
  },
  componentWillUnmount(){
    myChecklistSubscription.stop()
  },
  render() {
    return(
      <div>
        <h1>Your Checklists</h1>
        {this.props.checklists.map(
            (checklist) => 
              <div key={checklist._id} className="checklistLink" >
                <Link to={`/checklist/${checklist._id}`}>
                  {checklist.name} 
                </Link>
                <span onClick={()=>this.props.removeChecklist(checklist._id)} className="deleteIcon"> &#10060; </span>
              </div>
        )}
      </div>
    )
  }
})

export default MyChecklists
