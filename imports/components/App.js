import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '/imports/actionCreators'
import { getVisibleTasks } from '/imports/reducers/tasks'

import Main from '/imports/components/Main'

const mapStateToProps = ({auth, checklists, tasks}) => {
  return{
    loggedIn: auth.loggedIn,
    checklists: checklists.checklists,
    tasks: getVisibleTasks(tasks.tasks, tasks.hideCompleted),
    hideCompleted: tasks.hideCompleted
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)
export default App