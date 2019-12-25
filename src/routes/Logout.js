import React from 'react';
import {Redirect} from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { PropTypes } from 'prop-types'

class LogOut extends React.Component{
  /**
   * On Component Mount call userLogout action and redirect to root
   */
  componentDidMount() {
    const {userLogout} = this.props
    userLogout()
  }
  render() {
     return  <Redirect to="/" />
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({
  userLogout: actions.userLogout,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(LogOut);

LogOut.propTypes = {
  userLogout: PropTypes.func.isRequired
}
