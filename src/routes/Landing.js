import React from 'react';
import {Redirect} from 'react-router-dom';
import { toParams, toQuery } from '../utils';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Button from '../components/Button'
import landingLogo from '../assets/images/landingLogo.png'
import { PropTypes } from 'prop-types'

class Landing extends React.Component{

  /**
   * When clicks Login and open spotify login page with required parameters
   */
  onLoginClick = () => {
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    const scope = 'user-read-private'
    const search = toQuery({
      client_id: CLIENT_ID,
      scope,
      redirect_uri: window.location.href,
      response_type: 'token'
    });
    window.location.href =`https://accounts.spotify.com/authorize?${search}`;
  }

  componentDidMount() {
    //check if access token is available on hash, Case: return from spotify login page
    const params = toParams(window.location.hash.replace(/^#/, ''))
    if (typeof params.access_token !== 'undefined') {
      this.props.userLogin({ access_token:params.access_token })
    }else{
    //check if access token is on the local storage, Case: Already Signed but need to do userLogin again to check if that token expired
      if (localStorage.getItem('access_token') !== null) {
        this.props.userLogin({ access_token:localStorage.getItem('access_token') })
      }
    }
  }
  render() {
    const { loggedIn } = this.props
    if (loggedIn) {
     return <Redirect to='/playlists'/>
    }else{
      return (
        <div className="landing">
          <img src={landingLogo} alt="Welcome Logo"/>
          <h2>Welcome to the Web application that shows recommended playlists on Spotify</h2>
          <Button onClick={this.onLoginClick} className="buttonLogin">Login with your Spotify Account</Button>
        </div>
      )
    }
  }
}


const mapStateToProps = (state, ownProps) => { 
  return {
    access_token: state.login.access_token,
    loggedIn: state.login.loggedIn
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  userLogin: actions.userLogin,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Landing);

Landing.propTypes = {
  userLogin: PropTypes.func.isRequired,
  access_token: PropTypes.object,
  loggedIn: PropTypes.bool.isRequired
}