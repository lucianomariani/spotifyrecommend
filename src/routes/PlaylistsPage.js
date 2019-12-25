import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import TopBar from '../components/TopBar.js'
import Card from '../components/Card.js'
import Spinner from '../components/Spinner.js'
import ErrorMessage from '../components/ErrorMessage.js'
import { PropTypes } from 'prop-types'

class PlaylistsPage extends React.Component{

  /**
   * Fetch a Playlist
   */
  componentDidMount() {
    const { fetchPlaylists } = this.props
    fetchPlaylists()
  }
  render() {
    const { loading, playlists, error, errorMessage} = this.props
    let playlistshow 
    if (loading) {
      playlistshow = <Spinner/>
    }else{
    if (error) {
      return <ErrorMessage>Error: {errorMessage}</ErrorMessage>
    }else{
      if (typeof playlists.items !== 'undefined') {
        playlistshow = playlists.items.map((playlist, index) => {
          return <Card 
                  key={index} 
                  image={playlist.images[0].url} 
                  to={`/playlist-tracks/${playlist.id}/${encodeURIComponent(playlist.name)}`} 
                  title={ playlist.name } 
                  subtitle={`${playlist.tracks.total} Tracks`} 
                  />
        })
      }
    }
  }      
    return (
      <div>
        <TopBar>Playlists</TopBar>
        <div className="cardGroup">
          {playlistshow}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => { 
  return {
    playlists: state.playlists.playlists,
    error: state.errors.error,
    errorMessage: state.errors.message,
    loading: state.loadings.loading
  };
};
const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPlaylists: actions.fetchPlaylists,
  userLogin: actions.userLogin,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistsPage);

PlaylistsPage.propTypes = {
  fetchPlaylists: PropTypes.func.isRequired,
  userLogin: PropTypes.func.isRequired,
  playlists: PropTypes.object,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  loading: PropTypes.bool.isRequired
}