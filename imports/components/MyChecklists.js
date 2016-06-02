import React from 'react'
import { Link } from 'react-router'

const MyChecklists = ({checklists, removeChecklist}) => (
      <div>
        <h1>Your Checklists</h1>
        {checklists.map(
            (checklist) => 
              <div key={checklist._id} className="checklistLink" >
                <Link to={`/checklist/${checklist._id}`}>
                  {checklist.name} 
                </Link>
                <span onClick={()=>removeChecklist(checklist._id)} className="deleteIcon"> &#10060; </span>
              </div>
        )}
      </div>
)

export default MyChecklists
