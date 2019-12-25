import React from 'react'
import PropTypes from 'prop-types'

class ErrorMessage extends React.Component {

  render(){
    const { children } = this.props
    return(<div className="errorMessage">
     <p>{children}</p>
    </div>)
  }

}
export default ErrorMessage

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired
};