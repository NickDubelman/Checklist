import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from '/imports/actionCreators'

import Main from '/imports/components/Main'

function mapStateToProps(state){
  return{
    loggedIn: state.loggedIn
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)
export default App