import React from 'react'
import nextButton from '../assets/images/next.png'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

class Card extends React.Component {

  render(){
    const { to, image, title, subtitle, text} = this.props
    let nextLink
    if (to) { nextLink = <img src={nextButton} height='32' className="next" alt="next"/>}
    let card = <div className="card">
                  <img src={image} alt={title} width='40%'/>
                    <div>
                      <h2>{title}</h2>
                      <h3>{subtitle}</h3>
                      <p>{text}</p>
                      { nextLink }
                    </div>
                </div>
    
    if (to) {
      card = <Link to={to}>{card}</Link>
    }
    return(<div>{card}</div>)
  }

}
export default Card

Card.propTypes = {
  to: PropTypes.string, 
  image: PropTypes.string.isRequired, 
  title: PropTypes.string.isRequired, 
  subtitle: PropTypes.string.isRequired,  
  text: PropTypes.string
};