import React from 'react'
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { onClick, className, children } = this.props 
    return(
      <button onClick={onClick} className={className}>{children || 'Button'}</button>
    )
  }
}
export default Button

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};