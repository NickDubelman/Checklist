import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {login, logout} as actionCreators from '/imports/reducers/index'

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