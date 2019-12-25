import React from 'react';
import { Link } from 'react-router-dom'
import prevButton from '../assets/images/prev.png'
import exitButton from '../assets/images/exit.png'
import PropTypes from 'prop-types'

class topBar extends React.Component {

  render() {
    const {children} = this.props
    return (
      <div>
        <header>
          <Link to="/"><img src={prevButton} height='32' alt="Back"/></Link>
          <h2>{children}</h2>
          <Link to="/logout"><img src={exitButton} height='32' alt="Exit"/></Link>
        </header>
      </div>
    );
  } 
}

export default topBar;

topBar.propTypes = {
  children: PropTypes.string
};