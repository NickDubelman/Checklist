import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {login, logout} from '/imports/reducers/index'
import Main from '/imports/components/Main'

function mapStateToProps(state){
  return{
    loggedIn: state.auth.loggedIn
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({login, logout}, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)
export default App